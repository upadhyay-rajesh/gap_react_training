export default class CounterAction{
    static i='increment';
    static d='decrement';

    static doIncrement(){
        return {
            type:CounterAction.i
        }
    }

    static doDecrement(){
        return {
            type:CounterAction.d
        }
    }

    static doincrementasync(){
        return {
            type:'INCREMENT_ASYNC'
        }
    }

}