import type React from "react";
import type { ModeType } from "interface/union.type";
import { type SettingsSliceInterface } from "store/settings/settingsSlice";
import { type PayloadAction } from "@reduxjs/toolkit";
import type DeviceInterface from "./dimensions";
import type { ResponseInterface, LanguageInterface, PageIndexInterface } from "interface/payload.type";
import type PagePayloadInterface from "interface/directus/page-payload";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import type SectionPayloadInterface from "./directus/section-payload";
import type { ButtonPayloadInterface } from "./button";
import type { PhrasePayloadInterface } from "./phrase";
import type { QuestionSliceInterface } from "store/questions/questionsSlice";


export type ScreenByModeFuncType = (mode: ModeType) => React.ReactElement;


/** Setting Slice Function Signature */
export type SetModeFuncType = (state: SettingsSliceInterface, action: PayloadAction<ModeType>) => void;
export type SetDeviceFuncType = (state: SettingsSliceInterface, action: PayloadAction<DeviceInterface>) => void;
export type SetLanguageFuncType = (state: SettingsSliceInterface, action: PayloadAction<string>) => void;
export type SetDirectusFuncType = (state: SettingsSliceInterface, action: PayloadAction<string>) => void;
export type SetColorThemeFuncType = (state: SettingsSliceInterface, action: PayloadAction<number>) => void;
export type SetButtonsFuncType = (state: SettingsSliceInterface, action: PayloadAction<ButtonPayloadInterface>) => void;
export type SetPhrasesFuncType = (state: SettingsSliceInterface, action: PayloadAction<PhrasePayloadInterface>) => void;
export type SetSectionTitlesFuncType = (state: SettingsSliceInterface, action: PayloadAction<string[]>) => void;
export type SkipPageFuncType = (state: SettingsSliceInterface, action: PayloadAction<number>) => void;
export type AddPageFuncType = (state: SettingsSliceInterface, action: PayloadAction<{ key: number; page: PageIndexInterface }>) => void;
export type SetPageFuncType = (state: SettingsSliceInterface, action: PayloadAction<Record<number, PageIndexInterface>>) => void;
export type AddSectionTotalPagesFuncType = (state: SettingsSliceInterface, action: PayloadAction<{ sectionNumber: number; totalPages: number }>) => void;
export type SetKeyboardState = (state: SettingsSliceInterface, action: PayloadAction<boolean>) => void;
export type SettingsFuncType = (state: SettingsSliceInterface) => void;

/** Responses Slice Function Signature */
export type NewResponseFuncType = (state: Record<string, ResponseInterface>, action: PayloadAction<ResponseInterface>) => void;
export type ClearResponseByIdentFuncType = (state: Record<string, ResponseInterface>, action: PayloadAction<string>) => void;
export type ResponsesFuncType = (state: Record<string, ResponseInterface>) => void;

/** Questions Slice Function Signature */
export type SetLanguageOptionFuncType = (state: QuestionSliceInterface, action: PayloadAction<LanguageInterface[]>) => void;
export type SetIntroductoryPagesFuncType = (state: QuestionSliceInterface, action: PayloadAction<Array<PagePayloadInterface | QuestionDropdownPayloadInterface>>) => void;
export type AddSectionPageFuncType = (state: QuestionSliceInterface, action: PayloadAction<SectionPayloadInterface>) => void;
export type QuestionsFuncType = (state: QuestionSliceInterface) => void; 