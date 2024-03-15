import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';


export const formData = {
  "userInfo": [
    {
      "name": "firstName",
      "label": "First Name",
      "required": true,
      "type": "text",
      "validationRule": {
        "pattern": {
          "value": "^[a-zA-Z]+$",
          "message": "Invalid name"
        }
      },
      "icon": PersonIcon
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "required": true,
      "type": "text",
      "validationRule": {
        "pattern": {
          "value": "^[a-zA-Z]+$",
          "message": "Invalid name"
        }
      },
      "icon": PersonIcon
    },
    {
      "name": "parentName",
      "label": "Parent Name",
      "required": true,
      "type": "text",
      "validationRule": {
        "pattern": {
          "value": "^[a-zA-Z]",
          "message": "Invalid name"
        }
      },
      "icon": PeopleIcon
    },
    {
      "name": "phoneNumber",
      "label": "Phone Number",
      "required": true,
      "type": "tel",
      "validationRule": {
        "pattern": {
          "value": "^[0-9]{10}$",
          "message": "Invalid phone number"
        }
      },
      "icon": LocalPhoneIcon
    },
    {
      "name": "email",
      "label": "Email",
      "required": true,
      "type": "email",
      "validationRule": {
        "pattern": {
          "value": "^\\S+@\\S+$",
          "message": "Invalid email address"
        }
      },
      "icon": EmailIcon
    },
    {
      "name": "address",
      "label": "Address",
      "required": true,
      "type": "text",
      "validationRule": {},
      "icon": HomeIcon
    }
  ],
  "familyInfo": [
    {
      "name": "relation",
      "label": "Relation",
      "required": true,
      "type": "text",
      "validationRule": {
        "pattern": {
          "value": "^[a-zA-Z]+$",
          "message": "Invalid name"
        }
      },
      "icon": PeopleIcon
    },
    {
      "name": "firstName",
      "label": "First Name",
      "required": true,
      "type": "text",
      "validationRule": {
        "pattern": {
          "value": "^[a-zA-Z]+$",
          "message": "Invalid name"
        }
      },
      "icon": PersonIcon
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "required": true,
      "type": "text",
      "validationRule": {
        "pattern": {
          "value": "^[a-zA-Z]+$",
          "message": "Invalid name"
        }
      },
      "icon": PersonIcon
    },
    {
      "name": "phoneNumber",
      "label": "Phone Number",
      "required": true,
      "type": "tel",
      "validationRule": {
        "pattern": {
          "value": "^[0-9]{10}$",
          "message": "Invalid phone number"
        }
      },
      "icon": LocalPhoneIcon
    },
    {
      "name": "email",
      "label": "Email",
      "required": true,
      "type": "email",
      "validationRule": {
        "pattern": {
          "value": "^\\S+@\\S+$",
          "message": "Invalid email address"
        }
      },
      "icon": EmailIcon
    },
    {
      "name": "address",
      "label": "Address",
      "required": true,
      "type": "text",
      "validationRule": {},
      "icon": HomeIcon
    }
  ]
}
  
  