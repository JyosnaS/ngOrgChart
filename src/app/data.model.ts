export class UserData {
    name: string;
    spouse: string;
    late?: boolean;
    baby?: boolean;
    avatar?: string;
    spouseAvatar?: string;
    gender?: Gender;
    constructor(raw: any) {
        this.name = raw.name;
        this.spouse = raw.spouse;
        this.late = raw.late;
        this.baby = raw.baby;
        this.avatar = raw.avatar;
        this.spouseAvatar = raw.spouseAvatar;
        this.gender = raw.gender;
    }

    toString() {
        return this.name;
    }
}

export enum Gender {
    MALE = 'M',
    FEMALE = 'F'
}