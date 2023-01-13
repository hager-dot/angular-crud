import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students= [
    {
      "id": 2,
      "local_id": 3,
      "student_username": "ag1student1",
      "name": {
        "first_name": "Brandon",
        "last_name": "Adair"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "1998-12-13",
        "projected_graduation_year": 2016
      },
      "addresses": {
        "physical": {
          "street": "1337 Greymont Ave",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39202
        },
        "mailing": {
          "street": "1337 Greymont Ave",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39202
        }
      },
      "alerts": {
        "legal": {
          "description": "Divorced parents only mom should pick up",
          "expires_date": "NEVER_EXPIRES"
        },
        "discipline": {
          "description": "Fighting is a problem",
          "expires_date": "NEVER_EXPIRES"
        },
        "medical": {
          "description": "Allergic to peanuts",
          "expires_date": "NEVER_EXPIRES"
        },
        "other": {
          "description": "Brandon needs to go to study hall during 3rd period.",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-3612"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 12,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "track": "A",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "B"
      },
      "contact": {
        "emergency_contact_name1": "Jonathan Mccarthy",
        "emergency_phone1": "1-555-555-6049",
        "emergency_phone2": "1-555-555-2202",
        "guardian_email": "example217457@marketvolt.com",
        "mother": "Willima Adair",
        "father": "Adam Adair",
        "doctor_name": "Dr. Tom Smith",
        "doctor_phone": "1-555-555-2035"
      },
      "contact_info": {
        "email": "Brandon.Adair@powerschool.com"
      }
    },
    {
      "id": 3,
      "local_id": 4,
      "student_username": "ag1student2",
      "name": {
        "first_name": "Corby",
        "last_name": "Adams"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "2000-10-02",
        "district_entry_date": "2014-10-12",
        "projected_graduation_year": 2018
      },
      "addresses": {
        "physical": {
          "street": "4658 Norway Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206
        },
        "mailing": {
          "street": "4658 Norway Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206
        }
      },
      "alerts": {
        "legal": {
          "description": "Lives with family friends",
          "expires_date": "NEVER_EXPIRES"
        },
        "discipline": {
          "description": "Not allowed in Media Center",
          "expires_date": "NEVER_EXPIRES"
        },
        "medical": {
          "description": "Allergic to peanuts",
          "expires_date": "NEVER_EXPIRES"
        },
        "other": {
          "description": "Needs to submit birth certificate to office!",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-2892"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 10,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "B"
      },
      "contact": {
        "emergency_contact_name1": "Donovan Bowen",
        "emergency_phone1": "1-555-555-6052",
        "emergency_phone2": "1-555-555-1854",
        "guardian_email": "example143223@marketvolt.com",
        "mother": "Lori Adams",
        "father": "Jacob Adams",
        "doctor_name": "Dr. Barbara Seidl",
        "doctor_phone": "1-555-555-3266"
      },
      "contact_info": {
        "email": "Corby.Adams@powerschool.com"
      }
    },
    {
      "id": 4,
      "local_id": 5,
      "student_username": "ag1student4",
      "name": {
        "first_name": "Emmy",
        "last_name": "Ahlberg"
      },
      "demographics": {
        "gender": "F",
        "birth_date": "2000-11-21",
        "district_entry_date": "2014-10-12",
        "projected_graduation_year": 2018
      },
      "addresses": {
        "physical": {
          "street": "638 Belvedere Rd",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206,
          "grid_location": "Lat: 32.3573978, Lng: -90.163067"
        },
        "mailing": {
          "street": "638 Belvedere Rd",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206
        }
      },
      "alerts": {
        "legal": {
          "description": "Lives with family friends",
          "expires_date": "NEVER_EXPIRES"
        },
        "medical": {
          "description": "Spleen injured in Rugby. No sports for six months",
          "expires_date": "NEVER_EXPIRES"
        },
        "other": {
          "description": "Must take bus #4 all week.",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-3558"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 10,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "B"
      },
      "contact": {
        "emergency_contact_name1": "Nicholas Brannan",
        "emergency_phone1": "1-555-555-6055",
        "emergency_phone2": "1-555-555-2688",
        "guardian_email": "example80930@marketvolt.com",
        "mother": "Monica Ahlberg",
        "father": "Kevin Ahlberg",
        "doctor_name": "Dr. Barbara Seidl",
        "doctor_phone": "1-555-555-2035"
      },
      "contact_info": {
        "email": "Emmy.Ahlberg@powerschool.com"
      }
    },
    {
      "id": 5,
      "local_id": 6,
      "student_username": "ag1student5",
      "name": {
        "first_name": "Andy",
        "middle_name": "G",
        "last_name": "Aikinson"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "1997-06-27",
        "projected_graduation_year": 2016
      },
      "addresses": {
        "physical": {
          "street": "732 Lindsey Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39209,
          "grid_location": "Lat: 32.3092896, Lng: -90.2372855"
        },
        "mailing": {
          "street": "732 Lindsey Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39209
        }
      },
      "alerts": {
        "medical": {
          "description": "Allergic to Peanuts",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-3552"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 12,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "H"
      },
      "contact": {
        "emergency_contact_name1": "Joshua BergStrom",
        "emergency_phone1": "1-555-555-2074",
        "emergency_phone2": "1-555-555-3770",
        "guardian_email": "example15241@marketvolt.com",
        "mother": "Katie Aiello",
        "father": "Roberto Aiello",
        "doctor_name": "Dr. Barbara Seidl",
        "doctor_phone": "1-555-555-4557"
      },
      "contact_info": {
        "email": "Andy.Aikinson@powerschool.com"
      }
    },
    {
      "id": 6,
      "local_id": 7,
      "student_username": "ag1student6",
      "name": {
        "first_name": "Scott",
        "last_name": "Alfonso"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "1999-11-17",
        "projected_graduation_year": 2017
      },
      "addresses": {
        "physical": {
          "street": "246 Sunny Lane Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39204,
          "grid_location": "Lat: 32.273518, Lng: -90.2124748"
        },
        "mailing": {
          "street": "246 Sunny Lane Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39204
        }
      },
      "alerts": {
        "discipline": {
          "description": "Uses inappropriate language",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-2569"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 11,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "C"
      },
      "contact": {
        "guardian_email": "example140401@marketvolt.com",
        "mother": "Christina Allen",
        "father": "Daniel Allen",
        "doctor_name": "Dr. Wendy Jackson, MD",
        "doctor_phone": "1-555-555-3266"
      },
      "contact_info": {
        "email": "Scott.Alfonso@powerschool.com"
      }
    },
    {
      "id": 7,
      "local_id": 8,
      "student_username": "ag1student7",
      "name": {
        "first_name": "Victor",
        "middle_name": "C",
        "last_name": "Allen"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "1999-01-16",
        "projected_graduation_year": 2017
      },
      "addresses": {
        "physical": {
          "city": "Jackson",
          "street":"234 Ali Ibn Abu Taleb",
          "state_province": "MS",
          "postal_code": 39209
        },
        "mailing": {
          "street": "1555 Burton St",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39209
        }
      },
      "alerts": {
        "legal": {
          "description": "Lives with family friends",
          "expires_date": "NEVER_EXPIRES"
        },
        "medical": {
          "description": "Allergic to bee stings",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-3567"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 11,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "I"
      },
      "contact": {
        "emergency_contact_name1": "Daniel Atwood",
        "emergency_phone1": "1-555-555-6237",
        "emergency_phone2": "1-555-555-1782",
        "guardian_email": "example205225@marketvolt.com",
        "mother": "Mary Allan",
        "father": "Andrew Allan",
        "doctor_name": "Dr. Robert Watson, MD",
        "doctor_phone": "1-555-555-2655"
      },
      "contact_info": {
        "email": "Victor.Allen@powerschool.com"
      }
    },
    {
      "id": 8,
      "local_id": 9,
      "student_username": "ag1student8",
      "name": {
        "first_name": "Alfred",
        "middle_name": "P",
        "last_name": "Allred"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "1999-05-02",
        "projected_graduation_year": 2018
      },
      "addresses": {
        "physical": {
          "street": "866 Serville Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206,
          "grid_location": "Lat: 32.3689582, Lng: -90.156591"
        },
        "mailing": {
          "street": "866 Serville Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206
        }
      },
      "alerts": {
        "discipline": {
          "description": "Please be aware of this student. Thinks that being on the football team should get him by, but Asst. Principal Zorr knows better. Should you have any problems, please contact Asst. Principal Zorr",
          "expires_date": "NEVER_EXPIRES"
        },
        "medical": {
          "description": "Diabetic - Insulin available from nurse",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-2209"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 10,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "H"
      },
      "contact": {
        "emergency_contact_name1": "Michael Garner",
        "emergency_phone1": "1-555-555-6071",
        "emergency_phone2": "1-555-555-2651",
        "guardian_email": "example132972@marketvolt.com",
        "mother": "Kathryn Allred",
        "father": "Payton Allred",
        "doctor_name": "Dr. Robert Watson, MD",
        "doctor_phone": "1-555-555-2655"
      },
      "contact_info": {
        "email": "Alfred.Allred@powerschool.com"
      }
    },
    {
      "id": 9,
      "local_id": 10,
      "student_username": "ag1student9",
      "name": {
        "first_name": "Christopher",
        "middle_name": "N",
        "last_name": "Allred"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "1999-10-21",
        "projected_graduation_year": 2017
      },
      "addresses": {
        "physical": {
          "street": "1134 Langley Ave",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39204,
          "grid_location": "Lat: 32.2879721, Lng: -90.1958322"
        },
        "mailing": {
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39204
        }
      },
      "alerts": {
        "medical": {
          "description": "allergic to homework",
          "expires_date": "NEVER_EXPIRES"
        },
        "other": {
          "description": "Walks home after school.",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-3555"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 11,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "I"
      },
      "contact": {
        "emergency_contact_name1": "Eric Webber",
        "emergency_phone1": "1-555-555-1695",
        "emergency_contact_name2": "Israel Turner",
        "emergency_phone2": "1-555-555-3391",
        "guardian_email": "example39542@marketvolt.com",
        "mother": "Wendy, Allred",
        "father": "August Allred",
        "doctor_name": "Dr. Tom Smith",
        "doctor_phone": "1-555-555-2217"
      },
      "contact_info": {
        "email": "Christopher.Allred@powerschool.com"
      }
    },
    {
      "id": 10,
      "local_id": 11,
      "student_username": "ag1student10",
      "name": {
        "first_name": "Jacee",
        "middle_name": "L",
        "last_name": "Allred"
      },
      "demographics": {
        "gender": "F",
        "birth_date": "1998-03-28",
        "projected_graduation_year": 2016
      },
      "addresses": {
        "physical": {
          "street": "175 Kimbrough Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39204,
          "grid_location": "Lat: 32.2694115, Lng: -90.2161041"
        },
        "mailing": {
          "street": "175 Kimbrough Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39204
        }
      },
      "alerts": {
        "legal": {
          "description": "Dad has a restraining order.",
          "expires_date": "NEVER_EXPIRES"
        },
        "discipline": {
          "description": "Member of the student citizenship panel.",
          "expires_date": "NEVER_EXPIRES"
        },
        "medical": {
          "description": "Prone to seizures",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-1726"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 12,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "H"
      },
      "contact": {
        "emergency_contact_name1": "Isaac Crosby",
        "emergency_phone1": "1-555-555-6076",
        "emergency_phone2": "1-555-555-1967",
        "guardian_email": "example239895@marketvolt.com",
        "mother": "Char Allred",
        "father": "Willis Allred",
        "doctor_name": "Dr. Barbara Seidl",
        "doctor_phone": "1-555-555-2035"
      },
      "contact_info": {
        "email": "Jacee.Allred@powerschool.com"
      }
    },
    {
      "id": 11,
      "local_id": 12,
      "student_username": "ag1student11",
      "name": {
        "first_name": "Harold",
        "last_name": "Almanza"
      },
      "demographics": {
        "gender": "M",
        "birth_date": "1999-08-19",
        "projected_graduation_year": 2017
      },
      "addresses": {
        "physical": {
          "street": "264 Culley Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206,
          "grid_location": "Lat: 32.3779072, Lng: -90.1591076"
        },
        "mailing": {
          "street": "264 Culley Dr",
          "city": "Jackson",
          "state_province": "MS",
          "postal_code": 39206
        }
      },
      "alerts": {
        "legal": {
          "description": "Lives with family friends",
          "expires_date": "NEVER_EXPIRES"
        },
        "medical": {
          "description": "Allergic to Peanuts - Contact School Nurse Immediately if ingested",
          "expires_date": "NEVER_EXPIRES"
        }
      },
      "phones": {
        "main": {
          "number": "1-555-555-3553"
        }
      },
      "school_enrollment": {
        "enroll_status": "A",
        "enroll_status_description": "Active",
        "enroll_status_code": 0,
        "grade_level": 11,
        "entry_date": "2015-05-25",
        "exit_date": "2016-05-22",
        "school_number": 100,
        "school_id": 3,
        "entry_code": "A1",
        "entry_comment": "promoted",
        "full_time_equivalency": {
          "fteid": 854,
          "name": "Full Time"
        }
      },
      "ethnicity_race": {
        "scheduling_reporting_ethnicity": "H"
      },
      "contact": {
        "emergency_contact_name1": "Gregory Stewart",
        "emergency_phone1": "1-555-555-1742",
        "emergency_phone2": "1-555-555-3438",
        "guardian_email": "example204196@marketvolt.com",
        "mother": "Rebecca Almanza",
        "father": "Joseph Almanza",
        "doctor_name": "Dr. Robert Watson, MD",
        "doctor_phone": "1-555-555-2655"
      },
      "contact_info": {
        "email": "Harold.Almanza@powerschool.com"
      }
    }
  ]

  constructor() { }

  getStudents(){
     return this.students
  }

  deleteStudent(id:number){
    const updatedStudents=this.students.filter(student=>student.id!=id)
    this.students=updatedStudents
    return updatedStudents
  }

  getStudent(id:number):any{
    return this.students.find(student=>student.id=id)
  }
}
