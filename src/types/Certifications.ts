import Certification from "./Certification";

export default interface Certifications {
    certifications: {
        US?: Certification[],
        CA?: Certification[],
        DE?: Certification[],
        GB?: Certification[],
        AU?: Certification[],
        BR?: Certification[],
        FR?: Certification[],
        NZ?: Certification[],
        IN?: Certification[]

    }
}