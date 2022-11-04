import { useMachine }    from "@xstate/svelte/lib/fsm";
import { createMachine } from "@xstate/fsm";

const events = {
    daily   : "DAILY",
    weekly  : "WEEKLY",
    special : "SPECIAL"
};

const viewMachine = createMachine({
    id      : "view",
    initial : "daily",
    states  : {
        daily : {
            on : {
                [events.weekly]  : "weekly",
                [events.special] : "special"
            }
        },
        weekly : {
            on : {
                [events.daily]   : "daily",
                [events.special] : "special"
            }
        },
        special : {
            on : {
                [events.daily]  : "daily",
                [events.weekly] : "weekly"
            }
        }
    }
});

const { state, send } = useMachine(viewMachine);

export {
    events,
    state,
    send
};
