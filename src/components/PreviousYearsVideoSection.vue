<template>
  <section class="tickets-section" id="tickets" aria-labelledby="tickets-title">
    <div class="container tickets-wrap">
      <h2 id="tickets-title">GET YOUR TICKET</h2>
      <p class="tickets-subtitle">
        Save up to €200 bundling multiple days. Onsite tickets require an application to purchase.
      </p>

      <div class="ticket-tabs" role="tablist" aria-label="Ticket categories">
        <button
          v-for="(category, index) in categories"
          :key="category.key"
          type="button"
          class="ticket-tab"
          :class="{ active: index === activeCategoryIndex }"
          :aria-selected="index === activeCategoryIndex"
          role="tab"
          @click="selectCategory(index)"
        >
          {{ category.label }}
        </button>
      </div>

      <div class="ticket-grid" aria-live="polite">
        <article v-for="card in activeCategory.cards" :key="card.title" class="ticket-card">
          <div class="card-notch card-notch-top" aria-hidden="true"></div>
          <div class="card-header">
            <p class="card-dates">{{ card.dates }}</p>
            <p class="card-save">{{ card.save }}</p>
          </div>

          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-copy">{{ card.copy }}</p>

          <div class="card-pricing">
            <div>
              <p class="price-label">{{ card.priceLabel }}</p>
              <p class="price-note">{{ card.priceNote }}</p>
            </div>
            <div class="price-values">
              <p class="price-old">{{ card.oldPrice }}</p>
              <p class="price-new">{{ card.price }}</p>
              <p class="price-vat">+19% VAT</p>
            </div>
          </div>

          <a class="card-cta" :href="card.ctaUrl || 'https://ti.to/ae-events/ae-conference/with/conference-pass'">Apply for an Invite →</a>

          <div class="card-notch card-notch-bottom" aria-hidden="true"></div>
        </article>
      </div>

      <div class="included-block">
        <p class="included-title">Included with onsite ticket</p>
        <div class="included-list">
          <span v-for="item in activeCategory.included" :key="item" class="included-item">✓ {{ item }}</span>
        </div>
      </div>

      <div class="payment-block">
        <p class="payment-title">ACCEPTED PAYMENT METHODS</p>
        <div class="payment-list">
          <div v-for="method in activeCategory.payments" :key="method.label" class="payment-method">
            <div class="payment-icon" aria-hidden="true">{{ method.icon }}</div>
            <div>
              <p class="payment-label">{{ method.label }}</p>
              <p class="payment-note">{{ method.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const categories = [
  {
    key: 'bundles',
    label: 'Bundles',
    cards: [
      {
        dates: 'SEP 16+17+18',
        save: 'SAVE € 200',
        title: 'Super IC Day + Strategy Day + Conference',
        copy: 'Attend all 3 days, including the full day and 2 half day workshops selection with the biggest savings.',
        priceLabel: 'Early Bird',
        priceNote: 'Until June 1st',
        oldPrice: '€1.430',
        price: '€1.300',
      },
      {
        dates: 'SEP 17+18',
        save: 'SAVE € 100',
        title: 'Strategy & Biz Day + Conference',
        copy: 'Choose two half day workshops on the second day (September 17) and attend the Conference Day (September 18)',
        priceLabel: 'Early Bird',
        priceNote: 'Until June 1st',
        oldPrice: '€980',
        price: '€900',
      },
      {
        dates: 'SEP 16+18',
        save: 'SAVE € 100',
        title: 'Super IC Day + Conference',
        copy: 'Choose a full day workshop on the first day (September 16) and attend the Conference Day (September 18)',
        priceLabel: 'Early Bird',
        priceNote: 'Until June 1st',
        oldPrice: '€810',
        price: '€780',
      },
    ],
    included: ['Materials & Recordings', 'ARTHAM Welcome Kit', 'Food & Drinks', 'Certificate of Attendance'],
    payments: [
      { icon: '▣', label: 'Credit Card', note: 'VISA, Mastercard, AMEX' },
      { icon: '◫', label: 'Bank Transfer', note: 'Pay with Invoice' },
    ],
  },
  {
    key: 'single-day',
    label: 'Single Day',
    cards: [
      {
        dates: 'SEP 16',
        save: 'SAVE € 80',
        title: 'Strategy Day Pass',
        copy: 'A focused full-day experience for product and design teams looking for practical methods.',
        priceLabel: 'Standard',
        priceNote: 'Limited seats',
        oldPrice: '€690',
        price: '€640',
      },
      {
        dates: 'SEP 17',
        save: 'SAVE € 50',
        title: 'Biz Day Pass',
        copy: 'A half-day workshop pass for teams exploring design systems, strategy, and operations.',
        priceLabel: 'Standard',
        priceNote: 'Limited seats',
        oldPrice: '€420',
        price: '€390',
      },
      {
        dates: 'SEP 18',
        save: 'SAVE € 60',
        title: 'Conference Day Pass',
        copy: 'Join the main conference day for talks, panels, and networking with the design community.',
        priceLabel: 'Standard',
        priceNote: 'Limited seats',
        oldPrice: '€510',
        price: '€470',
      },
    ],
    included: ['Materials & Recordings', 'ARTHAM Welcome Kit', 'Food & Drinks', 'Certificate of Attendance'],
    payments: [
      { icon: '▣', label: 'Credit Card', note: 'VISA, Mastercard, AMEX' },
      { icon: '◫', label: 'Bank Transfer', note: 'Pay with Invoice' },
    ],
  },
  {
    key: 'leadership',
    label: 'Leadership',
    cards: [
      {
        dates: 'SEP 16+17',
        save: 'SAVE € 120',
        title: 'Leadership Bundle',
        copy: 'Two days for design leaders focused on people, decision-making, and organizational impact.',
        priceLabel: 'Early Bird',
        priceNote: 'Until June 1st',
        oldPrice: '€1.120',
        price: '€1.000',
      },
      {
        dates: 'SEP 17',
        save: 'SAVE € 60',
        title: 'Leadership Workshop',
        copy: 'A half-day session built for design managers and leaders shaping teams and culture.',
        priceLabel: 'Early Bird',
        priceNote: 'Until June 1st',
        oldPrice: '€520',
        price: '€460',
      },
      {
        dates: 'SEP 18',
        save: 'SAVE € 90',
        title: 'Leadership Conference Day',
        copy: 'Join the conference day with curated leadership sessions and conversations.',
        priceLabel: 'Early Bird',
        priceNote: 'Until June 1st',
        oldPrice: '€850',
        price: '€760',
      },
    ],
    included: ['Materials & Recordings', 'ARTHAM Welcome Kit', 'Food & Drinks', 'Certificate of Attendance'],
    payments: [
      { icon: '▣', label: 'Credit Card', note: 'VISA, Mastercard, AMEX' },
      { icon: '◫', label: 'Bank Transfer', note: 'Pay with Invoice' },
    ],
  },
  {
    key: 'online',
    label: 'Online',
    cards: [
      {
        dates: 'STREAM PASS',
        save: 'SAVE € 40',
        title: 'Conference Livestream',
        copy: 'Watch the conference day live and stay connected to the talks from anywhere.',
        priceLabel: 'Online',
        priceNote: 'Replay included',
        oldPrice: '€210',
        price: '€170',
        ctaUrl: 'https://ti.to/ae-events/ae-conference/with/conference-pass',
      },
      {
        dates: 'STREAM + REPLAY',
        save: 'SAVE € 50',
        title: 'Workshop + Conference Replay',
        copy: 'Get access to recorded talks, selected workshops, and the conference livestream.',
        priceLabel: 'Online',
        priceNote: 'Replay included',
        oldPrice: '€260',
        price: '€210',
      },
      {
        dates: 'TEAM PASS',
        save: 'SAVE € 70',
        title: 'Team Livestream Access',
        copy: 'Best for distributed teams who want the conference together without onsite attendance.',
        priceLabel: 'Online',
        priceNote: 'Replay included',
        oldPrice: '€320',
        price: '€250',
      },
    ],
    included: ['Materials & Recordings', 'ARTHAM Welcome Kit', 'Food & Drinks', 'Certificate of Attendance'],
    payments: [
      { icon: '▣', label: 'Credit Card', note: 'VISA, Mastercard, AMEX' },
      { icon: '◫', label: 'Bank Transfer', note: 'Pay with Invoice' },
    ],
  },
];

const activeCategoryIndex = ref(0);

const activeCategory = computed(() => categories[activeCategoryIndex.value]);

function selectCategory(index) {
  activeCategoryIndex.value = index;
}
</script>

<style scoped>
.tickets-section {
  background: #1e2223;
  padding: 3rem 0 4.5rem;
  color: #eef1f2;
}

.tickets-wrap {
  text-align: center;
}

.tickets-wrap h2 {
  margin: 0;
  color: #f3f3f3;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  font-size: clamp(2.2rem, 4.2vw, 3.5rem);
  line-height: 0.95;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.tickets-subtitle {
  margin: 0.75rem auto 0;
  max-width: 760px;
  color: #d7dbde;
  font-size: clamp(1.1rem, 1.7vw, 1.38rem);
  line-height: 1.25;
}

.ticket-tabs {
  margin: 1.4rem auto 0;
  width: fit-content;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0.28rem;
  border-radius: 999px;
  background: #303537;
}

.ticket-tab {
  border: 0;
  background: transparent;
  color: #edf0f2;
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.ticket-tab.active {
  background: #ff4d10;
  color: #fff;
}

.ticket-grid {
  margin: 1.85rem auto 0;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.ticket-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #24282b;
  border-radius: 3px;
  padding: 1.1rem 1rem 2.2rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  overflow: visible;
}

.card-notch {
  position: absolute;
  left: 50%;
  width: 38px;
  height: 24px;
  background: #1e2223;
  transform: translateX(-50%);
  pointer-events: none;
}

.card-notch-top {
  top: -1px;
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
}

.card-notch-bottom {
  bottom: 0;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.card-dates {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 700;
  color: #3a4044;
}

.card-save {
  margin: 0;
  padding: 0.22rem 0.45rem;
  border-radius: 999px;
  background: #d8f0ce;
  color: #4f8a3d;
  font-size: 0.76rem;
  font-weight: 800;
  white-space: nowrap;
}

.card-title {
  margin: 0.65rem 0 0;
  text-align: left;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  font-size: clamp(1.45rem, 2vw, 2rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  min-height: 2.04em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-copy {
  margin: 0.85rem 0 0;
  text-align: left;
  color: #2e3539;
  font-size: 1rem;
  line-height: 1.42;
  min-height: 5.68em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-pricing {
  margin-top: 1.1rem;
  padding-top: 0.9rem;
  border-top: 1px dotted #d9d9d9;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  min-height: 5.8rem;
}

.price-label {
  margin: 0;
  text-align: left;
  font-size: 1.1rem;
  color: #373d41;
}

.price-note {
  margin: 0.05rem 0 0;
  text-align: left;
  font-size: 0.88rem;
  color: #626a71;
}

.price-values {
  text-align: right;
}

.price-old {
  margin: 0;
  font-size: 1.22rem;
  color: #8d9295;
  text-decoration: line-through;
}

.price-new {
  margin: 0;
  font-size: 1.22rem;
  color: #1e2326;
  font-weight: 700;
}

.price-vat {
  margin: 0.08rem 0 0;
  font-size: 0.72rem;
  font-weight: 700;
  color: #5d656b;
}

.card-cta {
  margin-top: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 46px;
  border-radius: 999px;
  background: #ff4d10;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
  position: relative;
  z-index: 1;
}

.included-block {
  margin-top: 2rem;
}

.included-title {
  margin: 0;
  color: #9fa4a8;
  font-size: 1.05rem;
  font-weight: 700;
}

.included-list {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.4rem;
  flex-wrap: wrap;
}

.included-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #e9eff2;
  font-size: 0.98rem;
  font-weight: 600;
}

.payment-block {
  margin-top: 2.6rem;
}

.payment-title {
  margin: 0;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  font-size: 0.98rem;
  color: #d9dddd;
  font-weight: 800;
}

.payment-list {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  flex-wrap: wrap;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #f1f5f7;
}

.payment-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  display: grid;
  place-items: center;
  font-weight: 800;
}

.payment-label {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 700;
}

.payment-note {
  margin: 0.1rem 0 0;
  font-size: 0.82rem;
  color: #c0c8cc;
}

@media (max-width: 1040px) {
  .ticket-grid {
    grid-template-columns: 1fr;
    max-width: 700px;
  }

  .card-copy {
    min-height: 0;
  }

  .card-pricing {
    min-height: 0;
  }
}

@media (max-width: 760px) {
  .tickets-section {
    padding: 2.4rem 0 3.6rem;
  }

  .ticket-tabs {
    width: 100%;
    justify-content: center;
  }

  .ticket-tab {
    font-size: 0.92rem;
    padding: 0.5rem 0.72rem;
  }

  .ticket-card {
    padding: 0.95rem 0.9rem 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-copy {
    font-size: 0.96rem;
  }

  .card-pricing {
    margin-top: 0.9rem;
  }

  .card-pricing {
    flex-direction: column;
    align-items: flex-start;
  }

  .price-values {
    text-align: left;
  }
}
</style>
