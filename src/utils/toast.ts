type ToastType = "success" | "error" | "promise" | "multiline";
type Position = "top-left" | "top-middle" | "top-right" | "bottom-left" | "bottom-right" | "bottom-center";
interface Props {
    toastType: ToastType;
    text: string;
    class: string;
    id?: string;
    duration?: number;
    emoji?: any;
    position?: Position;
} 

function toast(query: string) {
    //this is a really hacky solution for toast notifications LOL
    const element = document.querySelector(query) as HTMLElement;
    //click the element
    element.click();
}

export { type ToastType, type Position, type Props, toast }
