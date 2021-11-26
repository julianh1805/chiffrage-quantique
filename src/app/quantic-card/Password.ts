import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Password = string

export interface PasswordEntropicStyle {
    comment: Password,
    icon: IconDefinition,
    color: string
}