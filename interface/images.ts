interface DeviceInterface {
	phone: string;
	phablet?: string;
	tablet: string;
}

export interface ImageModeInterface {
	kid?: string;
	adult?: string;
}

export interface ImageDeviceInterface {
	kid?: DeviceInterface;
	adult?: DeviceInterface;
}
