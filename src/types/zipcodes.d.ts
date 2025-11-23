declare module 'zipcodes' {
  export interface ZipLookupResult {
    zip: string;
    latitude: number;
    longitude: number;
    city: string;
    state: string;
  }

  const zipcodes: {
    lookup(zip: string | number): ZipLookupResult | null;
  };

  export default zipcodes;
}


