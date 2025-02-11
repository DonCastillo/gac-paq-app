import type React from "react";
import type { IntroductoryPagesType, ModeType } from "interface/union.type";
import { type SettingsSliceInterface } from "store/settings/settingsSlice";
import { type PayloadAction } from "@reduxjs/toolkit";
import type DeviceInterface from "./dimensions";
import type { ResponseInterface, LanguageInterface, PageIndexInterface, SectionPayloadInterface } from "interface/payload.type";
import type { PhrasePayloadInterface } from "./phrase";


export type ScreenByModeFuncType = (mode: ModeType) => React.ReactElement;


/** Setting Slice Function Signature */
export type SetModeFuncType = (state: SettingsSliceInterface, action: PayloadAction<ModeType>) => void;
export type SetDeviceFuncType = (state: SettingsSliceInterface, action: PayloadAction<DeviceInterface>) => void;
export type SetLanguageFuncType = (state: SettingsSliceInterface, action: PayloadAction<string>) => void;
export type SetDirectusFuncType = (state: SettingsSliceInterface, action: PayloadAction<string>) => void;
export type SetColorThemeFuncType = (state: SettingsSliceInterface, action: PayloadAction<number>) => void;
export type SetPhrasesFuncType = (state: SettingsSliceInterface, action: PayloadAction<PhrasePayloadInterface>) => void;
export type SetSectionTitlesFuncType = (state: SettingsSliceInterface, action: PayloadAction<string[]>) => void;
export type SetNarrationsFuncType = (state: SettingsSliceInterface, action: PayloadAction<Record<string, string | null>>) => void;
export type AddNarrationsFuncType = (state: SettingsSliceInterface, action: PayloadAction<{ident: string, audio_id: string | null}>) => void;
export type SkipPageFuncType = (state: SettingsSliceInterface, action: PayloadAction<number>) => void;
export type AddPageFuncType = (state: SettingsSliceInterface, action: PayloadAction<{ key: number; page: PageIndexInterface }>) => void;
export type SetPageFuncType = (state: SettingsSliceInterface, action: PayloadAction<Record<number, PageIndexInterface>>) => void;
export type SetIsConnectedFuncType = (state: SettingsSliceInterface, action: PayloadAction<boolean>) => void;
export type SetIsLoadingFuncType = (state: SettingsSliceInterface, action: PayloadAction<boolean>) => void;
export type AddSectionTotalPagesFuncType = (state: SettingsSliceInterface, action: PayloadAction<{ sectionNumber: number; totalPages: number }>) => void;
export type SetKeyboardState = (state: SettingsSliceInterface, action: PayloadAction<boolean>) => void;
export type SetEnableNarrationState = (state: SettingsSliceInterface, action: PayloadAction<boolean>) => void;
export type SettingsFuncType = (state: SettingsSliceInterface) => void;
export type DisableNarrationAutoplayFuncType = (state: SettingsSliceInterface) => void;
export type ResetAllNarrationAutoplayFuncType = (state: SettingsSliceInterface) => void;


/** Responses Slice Function Signature */
export type NewResponseFuncType = (state: Record<string, ResponseInterface>, action: PayloadAction<ResponseInterface>) => void;
export type ClearResponseByIdentFuncType = (state: Record<string, ResponseInterface>, action: PayloadAction<string>) => void;
export type ResponsesFuncType = (state: Record<string, ResponseInterface>) => void;

/** Questions Slice Function Signature */
export type SetLanguageOptionFuncType = (state: any, action: PayloadAction<LanguageInterface[]>) => void;
export type SetIntroductoryPagesFuncType = (state: any, action: PayloadAction<IntroductoryPagesType>) => void;
export type AddSectionPageFuncType = (state: any, action: PayloadAction<{sectionNumber: number; page: SectionPayloadInterface}>) => void;
export type AddSectionTitleFuncType = (state: any, action: PayloadAction<{sectionNumber: number; sectionTitle: string}>) => void;
export type QuestionsFuncType = (state: any) => void; 

export type loadPagesFuncType = (newPages: Record<number, PageIndexInterface>) => 
    { pages: Record<number, PageIndexInterface>; sectionTotal: Record<number, number> };