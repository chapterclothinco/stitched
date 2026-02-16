import Link from 'next/link';
import Image from 'next/image';
import BrandCatalog from '@/components/BrandCatalog';
import { notFound } from 'next/navigation';

const brands = {
  'celebration-collective': {
    name: 'Celebration Collective',
    tag: 'Life Celebrations',
    tagline: "Life's milestones, elevated",
    description: "Birthdays, bach trips, graduations, reunions — apparel that makes the moment memorable. Fun, colorful, and perfectly suited for personal celebrations.",
    price: '$40/piece',
    minimum: '12 pieces',
    turnaround: '3-4 weeks',
    categories: ['tops', 'bottoms', 'accessories', 'sleepwear'],
    logo: null,
    logoEmoji: '\uD83C\uDF89',
    perfectFor: [
      { title: 'Birthday Parties', desc: 'Milestone birthdays deserve more than a generic party hat. Custom tees, tanks, and sweats that celebrate the guest of honor in style.' },
      { title: 'Bachelor & Bachelorette', desc: 'From Vegas weekends to beach getaways, matching outfits that bring the squad together without looking like a cheesy costume.' },
      { title: 'Graduations', desc: 'Celebrate the achievement with custom pieces for grad parties, family gatherings, and friend groups marking the milestone together.' },
      { title: 'Family Reunions', desc: 'Unite the family with custom apparel that honors your history while looking good enough to actually wear again.' },
      { title: 'Friend Trips', desc: 'Annual lake trips, ski weekends, or destination adventures — matching pieces that become cherished memories.' },
      { title: 'Group Milestones', desc: 'Retirements, anniversaries, achievements — any moment worth celebrating with custom apparel done right.' },
    ],
    approach: {
      tag: 'Our Approach',
      title: 'Designed for Fun',
      lead: "Celebration Collective pieces are designed to capture the energy of your moment — playful, vibrant, and unapologetically fun.",
      body: "Our design team specializes in creating apparel that strikes the perfect balance: trendy enough to actually wear, personalized enough to feel special, and quality enough to keep long after the party ends.",
      features: [
        'Bold colors and modern typography',
        'Designs that work for all ages and body types',
        'Premium soft fabrics for all-day comfort',
        'Customization options for names, dates, and inside jokes',
      ],
    },
    cta: {
      title: 'Ready to celebrate in style?',
      description: "Tell us about your celebration and let's create something memorable.",
      button: 'Plan Your Celebration',
    },
  },
  'mitzvah-studio': {
    name: 'The Mitzvah Studio',
    tag: 'Bar & Bat Mitzvahs',
    tagline: 'Modern apparel for timeless traditions',
    description: 'Culturally aware design, crafted with reverence and modern restraint. Age-appropriate styles that honor tradition while feeling fresh.',
    price: '$55/piece',
    minimum: '15 pieces',
    turnaround: '4-5 weeks',
    categories: ['tops', 'bottoms', 'accessories', 'sleepwear'],
    logo: '/assets/Logos/MitzvahStudio.svg',
    perfectFor: [
      { title: 'Bar Mitzvahs', desc: "Celebrate this milestone with custom apparel that reflects the young man's personality while respecting the significance of the occasion." },
      { title: 'Bat Mitzvahs', desc: 'Elegant, age-appropriate designs that the honoree and guests will actually want to wear — during the celebration and beyond.' },
      { title: 'Party Favors', desc: 'Move beyond the typical swag bag with premium custom pieces that guests will cherish as meaningful keepsakes.' },
      { title: 'Family Matching', desc: 'Coordinated looks for immediate family, cousins, and close friends that photograph beautifully and feel special.' },
      { title: 'Event Staff', desc: "Polished, professional attire for event staff and helpers that complements your event's aesthetic." },
      { title: 'Weekend Celebrations', desc: 'Multi-day celebrations call for multiple looks — we design cohesive collections for every event on the schedule.' },
    ],
    approach: {
      tag: 'Our Approach',
      title: 'Tradition Meets Modern',
      lead: "The Mitzvah Studio understands the delicate balance between honoring tradition and creating something fresh and relevant for today's celebrations.",
      body: 'Our designers are experienced in creating apparel that feels appropriate for the synagogue, the party, and everywhere in between. We specialize in designs that photograph beautifully, feel comfortable for all-day wear, and become treasured keepsakes.',
      features: [
        'Sophisticated color palettes and refined typography',
        'Age-appropriate designs for 12-13 year olds and guests of all ages',
        'Options for Hebrew lettering and traditional motifs',
        'Coordination with event themes and color schemes',
      ],
    },
    cta: {
      title: 'Ready to honor the tradition?',
      description: "Tell us about your celebration and let's create something meaningful.",
      button: 'Start Your Mitzvah Project',
    },
  },
  'altar-atelier': {
    name: 'Altar Atelier',
    tag: 'Weddings & Bridal',
    tagline: 'Refined pieces for every moment',
    description: "Heirloom-quality apparel designed for the most intentional day of your life. Elegant, romantic, and crafted to become cherished keepsakes.",
    price: '$65/piece',
    minimum: '8 pieces',
    turnaround: '4-6 weeks',
    categories: ['tops', 'bottoms', 'accessories', 'sleepwear'],
    logo: '/assets/Logos/AltarAtelier.svg',
    perfectFor: [
      { title: 'Bridal Parties', desc: 'Elevated getting-ready robes, pajama sets, and loungewear that photograph beautifully and feel luxurious.' },
      { title: 'Wedding Weekends', desc: 'Coordinated looks for rehearsal dinners, welcome parties, and morning-after brunches that extend the celebration.' },
      { title: 'Bachelorette Trips', desc: 'Sophisticated bachelorette apparel that rises above the typical — elegant enough for upscale destinations.' },
      { title: 'Groomsmen', desc: 'Custom pieces for the groom\'s crew — from getting-ready gear to coordinated casual wear for events.' },
      { title: 'Family Coordination', desc: 'Subtle matching elements for family photos and wedding weekend events that feel cohesive without being costumey.' },
      { title: 'Honeymoon', desc: "Custom pieces for the newlyweds — from 'Just Married' loungewear to personalized honeymoon essentials." },
    ],
    approach: {
      tag: 'Our Approach',
      title: 'Heirloom Quality',
      lead: "Altar Atelier creates pieces worthy of the most significant celebration of your life — apparel you'll want to keep, not discard.",
      body: 'We specialize in romantic, elevated aesthetics that complement any wedding style — from modern minimalist to classic romantic. Every piece is designed with intention, using premium materials that feel as luxurious as your day deserves.',
      features: [
        'Elegant typography and refined design details',
        'Premium silk, satin, and soft cotton fabrics',
        'Coordination with wedding colors and themes',
        'Personalization options for names, dates, and monograms',
      ],
    },
    cta: {
      title: 'Ready to elevate your celebration?',
      description: "Tell us about your wedding and let's create something extraordinary.",
      button: 'Begin Your Wedding Journey',
    },
  },
  'sewcorporate': {
    name: 'SewCorporate',
    tag: 'Corporate & Brand',
    tagline: 'Elevated corporate and brand apparel',
    description: 'Premium brand expression for organizations that operate at scale. Professional, modern, and built to impress clients and employees alike.',
    price: '$45/piece',
    minimum: '25 pieces',
    turnaround: '3-5 weeks',
    categories: ['tops', 'accessories'],
    logo: '/assets/Logos/SewCorporate.svg',
    perfectFor: [
      { title: 'Company Swag', desc: 'Move beyond generic promotional items with premium apparel employees actually want to wear — at work and beyond.' },
      { title: 'Corporate Events', desc: "Conferences, retreats, team building events, and annual meetings deserve apparel that reflects your brand's quality." },
      { title: 'Employee Onboarding', desc: 'Make new hires feel valued from day one with a welcome kit that goes beyond the standard notebook and pen.' },
      { title: 'Client Gifts', desc: 'Premium branded apparel that clients will actually use — strengthening relationships through quality gifting.' },
      { title: 'Trade Shows', desc: 'Stand out from the competition with booth staff apparel and attendee giveaways that make an impression.' },
      { title: 'Brand Launches', desc: 'New brand or rebrand? Create cohesive apparel that introduces your visual identity with impact.' },
    ],
    approach: {
      tag: 'Our Approach',
      title: 'Brand Expression at Scale',
      lead: 'SewCorporate understands that your apparel is an extension of your brand — every piece should reflect your standards.',
      body: 'We specialize in translating corporate brand guidelines into premium apparel that employees are proud to wear. Our design process includes brand alignment reviews to ensure every piece accurately represents your visual identity.',
      features: [
        'Professional designs that align with brand guidelines',
        'Scalable ordering for organizations of any size',
        'Bulk pricing without compromising quality',
        'Recurring order programs for ongoing needs',
      ],
    },
    cta: {
      title: 'Ready to elevate your brand?',
      description: "Tell us about your organization and let's create something impressive.",
      button: 'Request a Corporate Quote',
    },
  },
  'member-threads': {
    name: 'Member Threads',
    tag: 'Groups & Organizations',
    tagline: 'Unity in every stitch',
    description: 'Elevated apparel for groups that expect more than standard issue. Inclusive, team-oriented, and built for communities that take pride in belonging.',
    price: '$35/piece',
    minimum: '20 pieces',
    turnaround: '3-4 weeks',
    categories: ['tops', 'bottoms', 'accessories'],
    logo: '/assets/Logos/MemberThreads.svg',
    logoClassName: 'brand-logo-member-threads',
    perfectFor: [
      { title: 'Sports Teams', desc: 'Game day gear, practice wear, and spirit apparel that builds team unity and looks great on the sidelines.' },
      { title: 'Greek Life', desc: 'Fraternity and sorority apparel that goes beyond basic letters — elevated designs that represent your chapter with pride.' },
      { title: 'Clubs & Organizations', desc: 'Academic clubs, honor societies, student organizations, and hobby groups deserve apparel as dedicated as their members.' },
      { title: 'Volunteer Groups', desc: 'Unite your volunteer team with apparel that identifies your cause and builds community among supporters.' },
      { title: 'Religious Organizations', desc: "Youth groups, mission trips, and congregation events with apparel that reflects your community's values." },
      { title: 'Fitness Communities', desc: 'CrossFit boxes, running clubs, cycling teams, and fitness groups with apparel built for performance and pride.' },
    ],
    approach: {
      tag: 'Our Approach',
      title: 'Designed for Belonging',
      lead: 'Member Threads understands that group apparel is about more than matching — it\'s about belonging to something bigger than yourself.',
      body: 'We create apparel that members are proud to wear, with inclusive sizing and designs that work for diverse groups. Our pieces build community while respecting individual style — unified without being uniform.',
      features: [
        'Inclusive size ranges for all body types',
        'Designs that balance unity with individual expression',
        'Durable materials built for active communities',
        'Easy reordering for new members and replacements',
      ],
    },
    cta: {
      title: 'Ready to unite your group?',
      description: "Tell us about your organization and let's create something unifying.",
      button: 'Start Your Membership Apparel',
    },
  },
};

export function generateStaticParams() {
  return Object.keys(brands).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const brand = brands[slug];
  if (!brand) return {};
  return {
    title: brand.name,
    description: brand.description,
  };
}

export default async function BrandPage({ params }) {
  const { slug } = await params;
  const brand = brands[slug];
  if (!brand) notFound();

  return (
    <>
      {/* Brand Hero */}
      <section className="page-hero brand-hero">
        <div className="container">
          <span className="overline">{brand.tag}</span>
          {brand.logo ? (
            <Image src={brand.logo} alt="" className={`brand-logo ${brand.logoClassName || ''}`} width={200} height={200} />
          ) : brand.logoEmoji ? (
            <div className="brand-card-placeholder-logo">{brand.logoEmoji}</div>
          ) : null}
          <h1 className="page-title">{brand.name}</h1>
          <p className="brand-hero-tagline">{brand.tagline}</p>
          <p className="page-subtitle">{brand.description}</p>
          <div className="brand-hero-meta">
            <span className="brand-meta-item">From {brand.price}</span>
            <span className="brand-meta-item">Min. {brand.minimum}</span>
            <span className="brand-meta-item">{brand.turnaround}</span>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="perfect-for-section">
        <div className="container">
          <div className="section-header center">
            <span className="overline">Perfect For</span>
            <h2 className="section-title">Designed for Your <em>Moment</em></h2>
          </div>
          <div className="perfect-for-grid">
            {brand.perfectFor.map((item) => (
              <div key={item.title} className="perfect-for-item">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Catalog */}
      <section className="brand-catalog-section">
        <div className="container">
          <div className="section-header center">
            <span className="overline">Collection</span>
            <h2 className="section-title">Explore the <em>Collection</em></h2>
          </div>
          <BrandCatalog brandSlug={slug} categories={brand.categories} />
        </div>
      </section>

      {/* Brand Approach */}
      <section className="brand-approach-section">
        <div className="container">
          <div className="brand-approach-content">
            <span className="overline">{brand.approach.tag}</span>
            <h2 className="section-title">{brand.approach.title}</h2>
            <p className="approach-lead">{brand.approach.lead}</p>
            <p className="approach-body">{brand.approach.body}</p>
            <ul className="approach-features">
              {brand.approach.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{brand.cta.title}</h2>
            <p className="cta-description">{brand.cta.description}</p>
            <Link href="/contact" className="btn btn-primary btn-large btn-white">{brand.cta.button}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
