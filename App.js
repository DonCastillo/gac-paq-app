import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import FullWidthButton from "./components/kids/FullWidthButton";
import AppWrapper from "./base-pages/AppWrapper";

import React, { useCallback, useEffect, useState } from "react";

import useFonts from "./hooks/useFonts";
import QuestionContextProvider from "./store/questions";
import SettingContextProvider from "./store/settings";
import ResponseContextProvider, { ResponseContext } from "./store/responses";

export default function App() {
    return (
        <ResponseContextProvider>
            <QuestionContextProvider>
                <SettingContextProvider>
                    <AppWrapper />
                </SettingContextProvider>
            </QuestionContextProvider>
        </ResponseContextProvider>
    );
}
