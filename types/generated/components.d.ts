import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalAgeCard extends Struct.ComponentSchema {
  collectionName: 'components_global_age_cards';
  info: {
    displayName: 'AgeCard';
    icon: 'book';
  };
  attributes: {
    Body: Schema.Attribute.RichText & Schema.Attribute.DefaultTo<'Body'>;
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface GlobalAgeGroupSection extends Struct.ComponentSchema {
  collectionName: 'components_global_age_group_sections';
  info: {
    displayName: 'AgeGroupSection';
  };
  attributes: {
    Body: Schema.Attribute.RichText & Schema.Attribute.DefaultTo<'Body'>;
    Content: Schema.Attribute.Component<'global.age-card', true>;
    featuredText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'featuredText'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface GlobalBasicKindiSection extends Struct.ComponentSchema {
  collectionName: 'components_global_basic_kindi_sections';
  info: {
    displayName: 'Basic Kindi Section';
    icon: 'bold';
  };
  attributes: {
    BodyDescription: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    featuredText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'featuredText'>;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'title'>;
  };
}

export interface GlobalFaq extends Struct.ComponentSchema {
  collectionName: 'components_global_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    Answer: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    Question: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Question'>;
  };
}

export interface GlobalKindiRegularSection extends Struct.ComponentSchema {
  collectionName: 'components_global_kindi_regular_sections';
  info: {
    displayName: 'Kindi Regular Section';
  };
  attributes: {
    bgcolor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'ffffff'>;
    Body: Schema.Attribute.RichText & Schema.Attribute.DefaultTo<'Body'>;
    buttonColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'000000'>;
    featuredText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'featuredText'>;
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface GlobalPricingComponent extends Struct.ComponentSchema {
  collectionName: 'components_global_pricing_components';
  info: {
    displayName: 'Pricing Component';
  };
  attributes: {
    HelpText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    isIncluded: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface GlobalPricingEntry extends Struct.ComponentSchema {
  collectionName: 'components_global_pricing_entries';
  info: {
    description: '';
    displayName: 'Pricing Entry';
  };
  attributes: {
    Features: Schema.Attribute.Component<'global.pricing-component', true>;
    Price: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<129.99>;
    PriceBody: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    PriceTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'PriceTitle'>;
    Thumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface GlobalReviewComponent extends Struct.ComponentSchema {
  collectionName: 'components_global_review_components';
  info: {
    displayName: 'Review Component';
  };
  attributes: {
    bgcolor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#00946c'>;
    body: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    featuredText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'feature Text'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface GlobalStandardPagesData extends Struct.ComponentSchema {
  collectionName: 'components_global_standard_pages_data';
  info: {
    displayName: 'StandardPagesData';
  };
  attributes: {
    Body: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    Lastupdated: Schema.Attribute.Date &
      Schema.Attribute.DefaultTo<'2025-01-07'>;
    Pagecontent: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface GlobalTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_global_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    About: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    Degree: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Degree'>;
    MemberPic: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Name of team member'>;
  };
}

export interface GlobalToggleCard extends Struct.ComponentSchema {
  collectionName: 'components_global_toggle_cards';
  info: {
    displayName: 'ToggleCard';
  };
  attributes: {
    bgcolor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'d93636'>;
    Body: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Educational play activities, ensuring children learn and develop consistently.'>;
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Toggle Card Title'>;
  };
}

export interface UserKidProfile extends Struct.ComponentSchema {
  collectionName: 'components_user_kid_profiles';
  info: {
    displayName: 'KidProfile';
  };
  attributes: {
    age: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<12>;
    AttendingNursury: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    dob: Schema.Attribute.Date & Schema.Attribute.DefaultTo<'2025-01-13'>;
    Gender: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Male'>;
    Name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Kid Name'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.age-card': GlobalAgeCard;
      'global.age-group-section': GlobalAgeGroupSection;
      'global.basic-kindi-section': GlobalBasicKindiSection;
      'global.faq': GlobalFaq;
      'global.kindi-regular-section': GlobalKindiRegularSection;
      'global.pricing-component': GlobalPricingComponent;
      'global.pricing-entry': GlobalPricingEntry;
      'global.review-component': GlobalReviewComponent;
      'global.standard-pages-data': GlobalStandardPagesData;
      'global.team-member': GlobalTeamMember;
      'global.toggle-card': GlobalToggleCard;
      'user.kid-profile': UserKidProfile;
    }
  }
}
