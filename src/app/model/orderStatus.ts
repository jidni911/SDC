export enum OrderStatus {
    PENDING = 'PENDING', // just placed
    REJECTED = 'REJECTED', // Rejected
    PROCESSING = 'PROCESSING', // Accepted
    OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
    COMPLETED = 'COMPLETED', // delivered
    CANCELLED = 'CANCELLED',
    REFUSED = 'REFUSED'
}
