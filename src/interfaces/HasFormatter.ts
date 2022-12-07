export type HasFormatter = {
    format(): string;
}

// export interface HasFormatter {
//     format(): string;
// }
// export abstract class HasFormatter {
//     format(): string {
//         return ""
//     }
// }
//abstract class enforces a certain functionality for the methods within
//the class that uses this abstract class' format() method will
//use whatever functionality is defined here
//whereas for an interface, functionality is not specified. The
//class that uses the interface just have to have the same method but
//each class can define their own functionality. 
