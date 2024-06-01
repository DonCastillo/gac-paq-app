import type React from "react";
import type { ModeType } from "interface/union.type";
import { type SettingsInterface } from "store/settings/settingsSlice";
import { type PayloadAction } from "@reduxjs/toolkit";
import type DeviceInterface from "./dimensions";
import { type PageInterface } from "store/settings/defaultPage";
import type LanguageInterface from "interface/language";
import type { ResponseInterface, RegionInterface } from "interface/payload.type";
import type PagePayloadInterface from "interface/directus/page-payload";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import type SectionPayloadInterface from "./directus/section-payload";
import type { ButtonPayloadInterface } from "./button";
import type { PhrasePayloadInterface } from "./phrase";


export type ScreenByModeFuncType = (mode: ModeType) => React.ReactElement;


/** Setting Slice Function Signature */
export type SetModeFuncType = (state: SettingsInterface, action: PayloadAction<ModeType>) => void;
export type SetDeviceFuncType = (state: SettingsInterface, action: PayloadAction<DeviceInterface>) => void;
export type SetLanguageFuncType = (state: SettingsInterface, action: PayloadAction<string>) => void;
export type SetDirectusFuncType = (state: SettingsInterface, action: PayloadAction<string>) => void;
export type SetColorThemeFuncType = (state: SettingsInterface, action: PayloadAction<number>) => void;
export type SetButtonsFuncType = (state: SettingsInterface, action: PayloadAction<ButtonPayloadInterface>) => void;
export type SetPhrasesFuncType = (state: SettingsInterface, action: PayloadAction<PhrasePayloadInterface>) => void;
export type SetSectionTitlesFuncType = (state: SettingsInterface, action: PayloadAction<string[]>) => void;
export type SkipPageFuncType = (state: SettingsInterface, action: PayloadAction<number>) => void;
export type AddPageFuncType = (state: SettingsInterface, action: PayloadAction<{ key: number; page: PageInterface }>) => void;
export type SetPageFuncType = (state: SettingsInterface, action: PayloadAction<Record<number, PageInterface>>) => void;
export type AddSectionTotalPagesFuncType = (state: SettingsInterface, action: PayloadAction<{ sectionNumber: number; totalPages: number }>) => void;
export type SetKeyboardState = (state: SettingsInterface, action: PayloadAction<boolean>) => void;
export type SettingsFuncType = (state: SettingsInterface) => void;

/** Responses Slice Function Signature */
export type NewResponseFuncType = (state: Record<string, ResponseInterface>, action: PayloadAction<ResponseInterface>) => void;
export type ClearResponseByIdentFuncType = (state: Record<string, ResponseInterface>, action: PayloadAction<string>) => void;
export type ResponsesFuncType = (state: Record<string, ResponseInterface>) => void;

/** Questions Slice Function Signature */
export type SetRegionOptionFuncType = (state: any, action: PayloadAction<RegionInterface[]>) => void;
export type SetLanguageOptionFuncType = (state: any, action: PayloadAction<LanguageInterface[]>) => void;
export type SetIntroductoryPagesFuncType = (state: any, action: PayloadAction<Array<PagePayloadInterface | QuestionDropdownPayloadInterface>>) => void;
export type AddSectionPageFuncType = (state: any, action: PayloadAction<SectionPayloadInterface>) => void;
export type QuestionsFuncType = (state: any) => void; 