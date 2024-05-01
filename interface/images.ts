interface DeviceInterface {
	phone: string;
	phablet?: string;
	tablet: string;
}

export interface ImageModeInterface {
	kid?: string;
	teen?: string;
	adult?: string;
}

export interface ImageDeviceInterface {
	kid?: DeviceInterface;
	teen?: DeviceInterface;
	adult?: DeviceInterface;
}
