import { JSXElement, Match, Switch } from "solid-js";
import { Column } from "../../Components/Container/Column";
import { Row } from "../../Components/Container/Row";
import { Field } from "../../Components/Text/Field";
import { Proficiency } from "../../../../Shared/Character/Stats/Proficiency";
import { Checkbox } from "../../Components/Checkbox/Checkbox";
import { Character, ClassLevel } from "./../../../../Shared/Character/Character"
import { Stats } from "./../../../../Shared/Character/Stats/Stats";
import { LingeringInjuriesView } from "./LingeringInjuriesView";

type CharacterViewProps = {
    character: Character
}

function DetailsView(props: { character: Character }): JSXElement {
    return <Column width="50%" style={{ "background-color": "gray", "border-radius": "20px", "padding-left": "10px", "margin-left": "10px", "margin-top": "10px" }} >
        <Field value={props.character.characteristics.name} underneath={"Character name"} />
        <Row>
            <Field value={props.character.characteristics.background} underneath={"Background"} />
            <ClassView classes={props.character.levels} />
        </Row>
        <Row>
            <Field value={props.character.characteristics.species} underneath={"Species"} />
            <Field value={props.character.characteristics.age} underneath={"Age"} />
        </Row>
    </Column>
}

function ClassView(props: { classes: ClassLevel[] }) {
    return <Field value={props.classes.map(cl => cl.class + " " + cl.level).join(", ")} underneath={props.classes.length > 1 ? "Classes" : "Class"} />
}

function calcModifier(statValue: number): number {
    return Math.floor((statValue - 10) / 2)
}

function StatView(props: { statName: string, statValue: number, savingThrow: Proficiency | undefined }): JSXElement {
    return <Column>
        {props.statName}
        <Row>
            <Field value={props.statValue} underneath={"Score"} />
            <Field value={calcModifier(props.statValue)} underneath={"Modifier"} />
            <Field value={<ProficiencyView proficiency={props.savingThrow ?? Proficiency.None} />} underneath="Saving throw" />
        </Row>
    </Column>
}

function ProficiencyView(props: { proficiency: Proficiency }) {
    return <Switch>
        <Match when={props.proficiency == Proficiency.None}>
            <Checkbox />
        </Match>
        <Match when={props.proficiency == Proficiency.Proficient}>
            <Checkbox checked />
        </Match>
        <Match when={props.proficiency == Proficiency.Expertise}>
            <Checkbox checked customCheckmark="☑️" />
        </Match>
    </Switch>
}

function StatsView(props: { stats: Stats }): JSXElement {
    return <Column width="50%" style={{ "background-color": "gray", "border-radius": "20px", "padding-left": "10px", "margin-left": "10px", "margin-top": "10px" }}>
        <StatView statName="Strength" statValue={props.stats.abilitieScores.strength} savingThrow={props.stats.savingThrows?.strength} />
        <StatView statName="Dexterity" statValue={props.stats.abilitieScores.dexterity} savingThrow={props.stats.savingThrows?.dexterity} />
        <StatView statName="Constitution" statValue={props.stats.abilitieScores.constitution} savingThrow={props.stats.savingThrows?.constitution} />
        <StatView statName="Intelligence" statValue={props.stats.abilitieScores.intelligence} savingThrow={props.stats.savingThrows?.intelligence} />
        <StatView statName="Wisdom" statValue={props.stats.abilitieScores.wisdom} savingThrow={props.stats.savingThrows?.wisdom} />
        <StatView statName="Charisma" statValue={props.stats.abilitieScores.charisma} savingThrow={props.stats.savingThrows?.charisma} />
    </Column>;
}

export function CharacterView(props: CharacterViewProps): JSXElement {
    return <Column height="100%" style={{ "justify-content": "space-between" }}>
        <DetailsView character={props.character} />
        <StatsView stats={props.character.stats} />
        <LingeringInjuriesView lingeringInjuries={props.character.lingeringInjuries}></LingeringInjuriesView>
    </Column>;
}