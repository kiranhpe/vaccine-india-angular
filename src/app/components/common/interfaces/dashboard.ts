export interface Dashboard {
    topBlock:                     TopBlock;
    vaccinationDoneByTime:        VaccinationDoneByTime[];
    last7DaysRegistration:        Last7DaysRegistration[];
    last30DaysAefi:               Last30DaysAefi[];
    last5daySessionStatus:        Last5DaySessionStatus[];
    getBeneficiariesGroupBy:      GetBeneficiariesGroupBy[];
    aefiPercentage:               number;
    vaccinationByAge:             VaccinationByAge;
    timeWiseTodayRegReport:       TimeWiseTodayRegReport[];
    vaccinationDoneByTimeAgeWise: VaccinationDoneByTimeAgeWise[];
    timestamp:                    Date;
}

export interface GetBeneficiariesGroupBy {
    state_id:           number;
    id:                 number;
    title:              string;
    state_name:         string;
    total:              number;
    partial_vaccinated: number;
    totally_vaccinated: number;
    today:              number;
}

export interface Last30DaysAefi {
    vaccine_date: Date;
    aefi:         number;
}

export interface Last5DaySessionStatus {
    session_date: Date;
    total:        number;
    planned:      number;
    ongoing:      number;
    completed:    number;
}

export interface Last7DaysRegistration {
    reg_date: Date;
    total:    number;
    male:     number;
    female:   number;
    others:   number;
}

export interface TimeWiseTodayRegReport {
    ts:         string;
    timestamps: string;
    label:      string;
    total:      string;
    age18:      string;
    age45:      string;
    age60:      string;
    male:       string;
    female:     string;
    others:     string;
}

export interface TopBlock {
    sites:        Sessions;
    sessions:     Sessions;
    registration: Registration;
    vaccination:  { [key: string]: number };
}

export interface Registration {
    total:        number;
    cit_18_45:    number;
    cit_45_above: number;
    today:        number;
}

export interface Sessions {
    total: number;
    govt:  number;
    pvt:   number;
    today: null;
}

export interface VaccinationByAge {
    total:     number;
    vac_18_45: number;
    vac_45_60: number;
    above_60:  number;
}

export interface VaccinationDoneByTime {
    ts:         string;
    timestamps: Date;
    label:      string;
    count:      number;
    dose_one:   number;
    dose_two:   number;
}

export interface VaccinationDoneByTimeAgeWise {
    ts:           string;
    timestamps:   Date;
    label:        string;
    total:        number;
    vac_18_45:    number;
    vac_45_60:    number;
    vac_60_above: number;
}
