/**
 * TypeScript interfaces for User management
 * These types ensure type safety throughout the application
 */

// Main User interface matching the JSONPlaceholder API structure
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
  imageUrl?: string; // Added for profile pictures
}

// User address information
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// Geographic coordinates
export interface Geo {
  lat: string;
  lng: string;
}

// Company information
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string; // Business service
}

// Flattened form data for easier form handling
export interface UserFormData {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  companyName: string;
  catchPhrase: string;
  bs: string;
}
