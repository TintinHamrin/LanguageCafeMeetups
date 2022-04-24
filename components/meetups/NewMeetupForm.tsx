import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
    </Box>
  );
}

// import { useRef } from "react";

// import Card from "../ui/Card";
// import classes from "./NewMeetupForm.module.css";

// function NewMeetupForm(props) {
//   const titleInputRef = useRef();
//   const imageInputRef = useRef();
//   const addressInputRef = useRef();
//   const descriptionInputRef = useRef();

//   function submitHandler(event) {
//     event.preventDefault();

//     const enteredTitle = titleInputRef.current.value;
//     const enteredImage = imageInputRef.current.value;
//     const enteredAddress = addressInputRef.current.value;
//     const enteredDescription = descriptionInputRef.current.value;

//     const meetupData = {
//       title: enteredTitle,
//       image: enteredImage,
//       address: enteredAddress,
//       description: enteredDescription,
//     };

//     props.onAddMeetup(meetupData);
//   }

//   return (
//     <Card>
//       <form className={classes.form} onSubmit={submitHandler}>
//         <div className={classes.control}>
//           <label htmlFor="title">Meetup Title</label>
//           <input type="text" required id="title" ref={titleInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="image">Meetup Image</label>
//           <input type="url" required id="image" ref={imageInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="address">Address</label>
//           <input type="text" required id="address" ref={addressInputRef} />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             required
//             rows="5"
//             ref={descriptionInputRef}
//           ></textarea>
//         </div>
//         <div className={classes.actions}>
//           <button>Add Meetup</button>
//         </div>
//       </form>
//     </Card>
//   );
// }

// export default NewMeetupForm;
