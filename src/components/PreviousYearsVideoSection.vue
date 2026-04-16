<template>
  <section class="tickets-section" id="sponsors" aria-labelledby="tickets-title">
    <div class="container tickets-wrap">
      <h2 id="tickets-title">PARTNERSHIP OPPORTUNITIES</h2>
      <p class="tickets-subtitle">
        Partner with New Dawn of Gaming. Access a curated audience of financial leaders, policymakers, investors, and innovators united by the Panama vs England World Cup moment.
      </p>

      <div class="ticket-tabs" role="tablist" aria-label="Sponsorship tiers">
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
              <p class="price-new">{{ card.price }}</p>
            </div>
          </div>

          <a class="card-cta" href="mailto:partners@onyxgoldgroup.com">Inquire Now →</a>

          <div class="card-notch card-notch-bottom" aria-hidden="true"></div>
        </article>
      </div>

      <div class="included-block">
        <p class="included-title">Included with sponsorship</p>
        <div class="included-list">
          <span v-for="item in activeCategory.included" :key="item" class="included-item">✓ {{ item }}</span>
        </div>
      </div>

      <div class="payment-block">
        <p class="payment-title">CONTACT US TO PARTNER</p>
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
    key: 'headline',
    label: 'Headline',
    cards: [
      {
        dates: 'TIER 1',
        save: '1 SLOT ONLY',
        title: 'Title Partner',
        copy: '"Presented by" naming rights across all event materials. Prominent placement in fireside chat, match viewing, and tournament. VIP table for 8, keynote speaking slot, and first-look on all media coverage.',
        priceLabel: 'Investment',
        priceNote: 'Exclusive — 1 available',
        price: '$50,000',
      },
      {
        dates: 'TIER 2',
        save: '2 SLOTS',
        title: 'Founding Partner',
        copy: 'Co-branded event identity. Logo on all screens and signage, dedicated VIP seating, recognition during fireside chat and match viewing, curated networking access, and branded tournament station.',
        priceLabel: 'Investment',
        priceNote: 'Limited availability',
        price: '$25,000',
      },
      {
        dates: 'TIER 3',
        save: 'AVAILABLE',
        title: 'Premier Partner',
        copy: 'Logo on event program and digital assets, on-screen recognition during all three acts, social media campaign inclusion, 4 VIP passes, and branded presence in the Cross-Atlantic Finance Hub.',
        priceLabel: 'Investment',
        priceNote: 'Multiple slots',
        price: '$10,000',
      },
    ],
    included: ['Speaking Opportunity', 'VIP Table Access', 'On-Screen Branding', 'Social Campaign Inclusion', 'Networking Priority'],
    payments: [
      { icon: '✉', label: 'Email Us', note: 'partners@onyxgoldgroup.com' },
      { icon: '📞', label: 'Call Us', note: 'Contact for details' },
    ],
  },
  {
    key: 'session',
    label: 'Session',
    cards: [
      {
        dates: 'SESSION PARTNER',
        save: 'AVAILABLE',
        title: 'Fireside Chat Sponsor',
        copy: 'Brand your organisation as the host of the morning fireside chat. Includes opening remarks, logo on all session materials, dedicated introduction, and pre-event networking access.',
        priceLabel: 'Investment',
        priceNote: '1 slot per session',
        price: '$7,500',
      },
      {
        dates: 'SESSION PARTNER',
        save: 'AVAILABLE',
        title: 'Match Viewing Sponsor',
        copy: 'Exclusive sponsor of the Panama vs England live viewing. Branded screens, half-time recognition, curated hospitality moment, and post-match media opportunity.',
        priceLabel: 'Investment',
        priceNote: '1 slot available',
        price: '$7,500',
      },
      {
        dates: 'SESSION PARTNER',
        save: 'AVAILABLE',
        title: 'Tournament Sponsor',
        copy: 'Present the evening gaming tournament. Name your organisation in the bracket, award prizes branded to your company, and host the closing celebration with trophy presentation.',
        priceLabel: 'Investment',
        priceNote: '1 slot available',
        price: '$5,000',
      },
    ],
    included: ['Session Naming Rights', 'On-Screen Recognition', 'Social Mentions', 'Event Program Listing'],
    payments: [
      { icon: '✉', label: 'Email Us', note: 'partners@onyxgoldgroup.com' },
      { icon: '📞', label: 'Call Us', note: 'Contact for details' },
    ],
  },
  {
    key: 'community',
    label: 'Supporting',
    cards: [
      {
        dates: 'TIER 4',
        save: 'AVAILABLE',
        title: 'Associate Partner',
        copy: 'Logo on event program and digital assets, social media mentions across event channels, 2 guest passes, and recognition in the post-event communications and recap content.',
        priceLabel: 'Investment',
        priceNote: 'Multiple slots',
        price: '$2,500',
      },
      {
        dates: 'TIER 5',
        save: 'AVAILABLE',
        title: 'Community Supporter',
        copy: 'Brand recognition in the event program and event website. Ideal for organisations aligned with responsible gaming, fintech, or sport who want visible association at an accessible level.',
        priceLabel: 'Investment',
        priceNote: 'Multiple slots',
        price: '$1,000',
      },
      {
        dates: 'CONTACT US',
        save: 'CUSTOM',
        title: 'Custom Partnership',
        copy: 'Looking for something tailored? We offer bespoke packages including VIP Lounge naming, networking dinner hosting, gaming station branding, and digital content co-production.',
        priceLabel: 'Custom Pricing',
        priceNote: 'Tailored packages',
        price: 'Inquire',
      },
    ],
    included: ['Social Media Mentions', 'Event Program Listing', 'Digital Asset Inclusion'],
    payments: [
      { icon: '✉', label: 'Email Us', note: 'partners@onyxgoldgroup.com' },
      { icon: '📞', label: 'Call Us', note: 'Contact for details' },
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
  background: #0a1928;
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
  background: #1a2d42;
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
  background: #0d1e3a;
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
  background: #0a1928;
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
  background: #d4e3f7;
  color: #0d1e3a;
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
  -webkit-line-clamp: 4;
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
  min-height: 4rem;
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

.price-new {
  margin: 0;
  font-size: 1.5rem;
  color: #0d1e3a;
  font-weight: 700;
}

.card-cta {
  margin-top: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 46px;
  border-radius: 999px;
  background: #0d1e3a;
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
  font-size: 1.2rem;
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
    flex-direction: column;
    align-items: flex-start;
  }

  .price-values {
    text-align: left;
  }
}
</style>
