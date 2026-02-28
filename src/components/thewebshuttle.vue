<template>
  <q-card flat bordered class="q-pa-md">

    <!-- Stepper -->
    <!-- <q-stepper flat animated color="primary" v-model="step" header-nav>
      <q-step name="1" title="Service" />
      <q-step name="2" title="Date & Time" />
      <q-step name="3" title="Details" />
    </q-stepper> -->

    <q-separator class="q-my-md" />

    <div class="row q-col-gutter-md">

      <!-- Calendar -->
      <div class="col-12 col-md-6">
        <div class="text-subtitle2 q-mb-sm">Choose date</div>
        <q-card flat bordered>
          <q-card-section>
            <q-date
              v-model="selectedDate"
              mask="YYYY-MM-DD"
              :options="dateOptions"
              :min="minDate"
              :max="maxDate"
              :default-year-month="defaultYearMonth"
              navigation
              @update:model-value="onDateSelected"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Slots -->
      <div class="col-12 col-md-6">
        <div class="text-subtitle2 q-mb-sm">Available time slots</div>
        <q-card flat bordered>
          <q-card-section>

            <div v-if="!selectedDate" class="text-caption">
              Select a date to see available slots
            </div>

            <div v-else>
              <div class="q-mb-sm text-caption">Destination</div>
              <q-segmented v-model="destination" :options="destOptions" dense />

              <div class="row q-col-gutter-sm q-mt-md">
                <q-chip
                  v-for="slot in slotsForSelectedDate"
                  :key="slot.id"
                  clickable
                  class="q-mb-sm"
                  :disable="isSlotDisabled(slot)"
                  :outline="!isSlotSelected(slot)"
                  :color="isSlotSelected(slot) ? 'primary' : 'white'"
                  :text-color="isSlotSelected(slot) ? 'white' : 'black'"
                  @click="trySelectSlot(slot)"
                >
                  {{ slot.label }}
                  <q-badge
                    class="q-ml-sm"
                    :color="isSlotInPast(slot) ? 'grey' : isSlotFull(slot) ? 'negative' : 'secondary'"
                  >
                    {{
                      isSlotInPast(slot)
                        ? 'Passed'
                        : isSlotFull(slot)
                          ? 'Full'
                          : remainingSeats(slot) + ' left'
                    }}
                  </q-badge>
                </q-chip>
              </div>

              <q-banner
                v-if="slotMessage"
                dense
                class="q-mt-md"
                :color="slotMessageColor"
              >
                {{ slotMessage }}
              </q-banner>
            </div>

          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-separator class="q-my-md" />

    <!-- Details -->
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-8">
        <q-form>
          <q-input v-model="form.name" label="Full name" dense outlined disable/>
          <q-input v-model="form.notes" label="Notes" dense outlined />
        </q-form>
      </div>

      <div class="col-12 col-md-4 flex flex-end">
        <q-btn flat label="Cancel" color="grey" @click="onCancel" />
        <q-btn
          label="Next"
          color="primary"
          class="q-ml-sm"
          :disable="!canProceed"
          @click="onNext"
        />
      </div>
    </div>

    <q-separator class="q-my-md" />

    <!-- Admin Preview -->
    <q-card-section>
      <div class="text-subtitle2 q-mb-sm">
        Bookings for {{ selectedDate || 'all dates' }}
      </div>

      <q-table
        dense
        flat
        row-key="id"
        :rows="filteredBookings"
        :columns="columns"
      >
        <template #body-cell-actions="props">
          <q-btn
            dense
            flat
            color="negative"
            label="Cancel"
            @click="cancelBooking(props.row.id)"
          />
        </template>
      </q-table>
    </q-card-section>

  </q-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { date } from 'quasar'

/* CONFIG */
const MAX_CAPACITY = 2
const MAX_ADVANCE_DAYS = 3
const STORAGE_KEY = 'shuttle_bookings'

const WEEKDAY_SLOTS = [
  { id: 's1', label: '06:30' },
  { id: 's2', label: '07:30' },
  { id: 's3', label: '09:00' },
  { id: 's4', label: '12:00' },
  { id: 's5', label: '15:00' },
  { id: 's6', label: '18:00' }
]

const SATURDAY_SLOTS = [
  { id: 's1', label: '08:00' },
  { id: 's2', label: '11:00' },
  { id: 's3', label: '16:00' }
]

const destOptions = [
  { label: 'Campus', value: 'campus' },
  { label: 'Accommodation', value: 'accommodation' }
]


const step = ref('2')
const selectedDate = ref(null)
const selectedSlot = ref(null)
const destination = ref('campus')
const form = ref({notes: '' })
const bookings = ref([])

/* DATE */
const today = new Date()
const defaultYearMonth = date.formatDate(today, 'YYYY-MM')
const minDate = date.formatDate(today, 'YYYY-MM-DD')
const maxDate = date.formatDate(
  date.addToDate(today, { days: MAX_ADVANCE_DAYS }),
  'YYYY-MM-DD'
)

/* HELPERS */
function parseIsoDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function dateOptions(d) {
  const [y, m, day] = d.split('/').map(Number)
  const dt = new Date(y, m - 1, day)
  const iso = date.formatDate(dt, 'YYYY-MM-DD')
  if (dt.getDay() === 0) return false
  if (iso < minDate || iso > maxDate) return false
  return true
}

/* TimeSlots */
const slotsForSelectedDate = computed(() => {
  if (!selectedDate.value) return []
  return parseIsoDate(selectedDate.value).getDay() === 6
    ? SATURDAY_SLOTS
    : WEEKDAY_SLOTS
})

function bookingsCountFor(slot) {
  return bookings.value.filter(b =>
    b.date === selectedDate.value &&
    b.slotId === slot.id &&
    b.destination === destination.value
  ).length
}

function remainingSeats(slot) {
  return MAX_CAPACITY - bookingsCountFor(slot)
}

function isSlotInPast(slot) {
  const todayIso = date.formatDate(new Date(), 'YYYY-MM-DD')
  if (selectedDate.value !== todayIso) return false

  const now = new Date()
  const [h, m] = slot.label.split(':').map(Number)
  const slotTime = new Date()
  slotTime.setHours(h, m, 0, 0)

  return slotTime <= now
}

function isSlotFull(slot) {
  return remainingSeats(slot) <= 0
}

function isSlotDisabled(slot) {
  return isSlotInPast(slot) || isSlotFull(slot)
}

function isSlotSelected(slot) {
  return selectedSlot.value?.id === slot.id
}

function trySelectSlot(slot) {
  if (!isSlotDisabled(slot)) selectedSlot.value = slot
}


const slotMessage = computed(() =>
  selectedSlot.value ? `Selected ${selectedSlot.value.label}` : 'Choose a time slot'
)
const slotMessageColor = computed(() =>
  selectedSlot.value ? 'positive' : 'info'
)

const canProceed = computed(() =>
  selectedDate.value &&
  selectedSlot.value 
)

/* STORAGE */
function loadBookings() {
  bookings.value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}
function saveBookings() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings.value))
}

/* ACTIONS */
function onDateSelected() {
  selectedSlot.value = null
}

function onNext() {
  loadBookings()
  if (isSlotDisabled(selectedSlot.value)) return

  bookings.value.push({
    id: crypto.randomUUID(),
    // userId: authUser.value.id,
    date: selectedDate.value,
    slotId: selectedSlot.value.id,
    slotLabel: selectedSlot.value.label,
    destination: destination.value,
    notes: form.value.notes.trim(),
    createdAt: new Date().toISOString()
  })

  saveBookings()
  selectedSlot.value = null
  form.value = { name: '', notes: '' }
}

function onCancel() {
  selectedSlot.value = null
  form.value = { name: '', notes: '' }
}

function cancelBooking(id) {
  bookings.value = bookings.value.filter(b => b.id !== id)
  saveBookings()
}

/* TABLE */
const columns = [
  { name: 'slotLabel', label: 'Slot', field: 'slotLabel' },
  { name: 'destination', label: 'Destination', field: 'destination' },
  { name: 'name', label: 'Name', field: 'name' },
  { name: 'actions', label: 'Actions', field: 'actions' }
]

const filteredBookings = computed(() =>
  selectedDate.value
    ? bookings.value.filter(b => b.date === selectedDate.value)
    : bookings.value
)


onMounted(() => {
  loadBookings()
  let d = new Date()
  while (d.getDay() === 0) d.setDate(d.getDate() + 1)
  selectedDate.value = date.formatDate(d, 'YYYY-MM-DD')
})
</script>

<style scoped>
.q-card {
  max-width: 1100px;
  margin: auto;
}
</style>
