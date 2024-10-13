export type LingeringInjury = {
    type: LingeringInjuryType,
    visualDescription: string,
    source: string
}

export enum LingeringInjuryType {
    LoseAnEye,
    LoseALegOrAFoot,
    Limp,
    MinorScar,
    BrokenRibs,
    InternalInjury,
    HorribleScar,
    FesteringWound,
    LoseAnArmOrAHand
}

export type LingeringInjuryDefinition = {
    type: LingeringInjuryType,
    name: string,
    rule: string
}