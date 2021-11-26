import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { EntropyLevel } from "../services/EntropyLevels";

export type Password = string

export interface PasswordEntropicStyle {
    comment: Password,
    icon: IconDefinition,
    color: string
}

export interface PasswordInfo {
    entropy: EntropyLevel,
    value: Password
}