export function truncateAddress(address: string) {
    if (!address) {
        return "";
    }

    return address.slice(0, 8) + "..." + address.slice(-8);
};