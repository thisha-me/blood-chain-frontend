export function truncateAddress(address) {
    if (!address) {
        return "";
    }

    return address.slice(0, 8) + "..." + address.slice(-8);
}