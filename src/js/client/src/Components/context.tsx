import { createContext, createSignal, JSXElement, useContext } from "solid-js";

function useDndContextProvider() {
    return {};
}

export type DndcContextModel = ReturnType<typeof useDndContextProvider>;

const DndcContext = createContext<DndcContextModel | undefined>(undefined);

export function DndContextProvider(props: { children: JSXElement }) {
    const value = useDndContextProvider();
    return <DndcContext.Provider value={value}>
        {props.children}
    </DndcContext.Provider>;
};

export function safeDndcContext() {
    const context = useContext(DndcContext);
    if (context === undefined) throw new Error("DndContext must be used within a DndContextProvider");
    return context;
}

export function useDndcContext() {
    return safeDndcContext();
}