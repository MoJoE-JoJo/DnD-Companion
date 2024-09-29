import { createContext, createSignal, JSXElement, useContext } from "solid-js";

function useDndcContextProvider() {
    return { };
}

export type DndcContextModel = ReturnType<typeof useDndcContextProvider>;

const DndcContext = createContext<DndcContextModel | undefined>(undefined);

export function DndcContextProvider(props: { children: JSXElement }) {
    const value = useDndcContextProvider();
    return <DndcContext.Provider value={value}>
        {props.children}
    </DndcContext.Provider>;
};

export function safeDndcContext() {
    const context = useContext(DndcContext);
    if (context === undefined) throw new Error("DndcContext must be used within a DndcContextProvider");
    return context;
}

export function useDndcContext() {    
    return safeDndcContext();
}