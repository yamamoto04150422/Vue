export interface Emits {
    (event : 'pointCount') : void;
    (event : 'pointCountset',set : number) : void;
    (event : 'pointNumber:count',count : number) : void;
}