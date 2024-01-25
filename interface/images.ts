interface DeviceInterface {
    phone: string;
    phablet?: string;
    tablet: string;
};

export default interface ImageInterface {
    kid?: DeviceInterface;
    adult?: DeviceInterface;
}