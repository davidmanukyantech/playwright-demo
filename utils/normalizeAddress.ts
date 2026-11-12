export default function normalizeAddress(address: string): string {
  // Remove leading and trailing whitespace
  let normalizedAddress = address.trim();

  // Replace multiple spaces with a single space
  normalizedAddress = normalizedAddress.replace(/\s+/g, " ");

  // Convert to lowercase for consistency
  normalizedAddress = normalizedAddress
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ""); // Remove special characters
  return normalizedAddress;
}
