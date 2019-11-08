
export const Type = {
    Show: "PROGRESS_SHOW",
    Hide: "PROGRESS_HIDE",
};

export const Creator = {
    show(message) {
        return{
            type: Type.Show,
            message,
        };
    },
    hide(){
        return{
            type: Type.Hide,
        };
    },
};