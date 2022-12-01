import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar, CalendarChangeParams } from "primereact/calendar";
import "./Meeting.css";
import { Button } from "primereact/button";
import MeetingList from "./MeetingList";
import { v4 as uuidv4 } from "uuid";
type meetings = {
  id: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
}[];

function Meeting({
  displayBasic,
  setDisplayBasic,
}: {
  displayBasic: boolean;
  setDisplayBasic: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let [meetings, setMeetings] = useState<meetings | []>([]);
  let [meetingDetails, setMeetingDetails] = useState<{
    title: string;
    description: string;
    startTime: Date | undefined;
    endTime: Date | undefined;
  }>({
    title: "",
    description: "",
    startTime: undefined,
    endTime: undefined,
  });
  let [updateId, setUpdateId] = useState<string | null>(null);
  let [errors, setErrors] = useState({
    title: false,
    description: false,
    startTime: false,
    endTime: false,
  });

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let name = event.currentTarget.name;
    let value = event.target.value;
    if (
      (name === "title" && value === "") ||
      (name === "description" && value === "")
    ) {
      setErrors((prev) => {
        return { ...prev, [name]: true };
      });
    } else if (
      (name === "title" && value) ||
      (name === "description" && value)
    ) {
      setErrors((prev) => {
        return { ...prev, [name]: false };
      });
    }

    if (name === "title" || name === "description") {
      setMeetingDetails((prev) => {
        return { ...prev, [name]: value };
      });
    }
  }

  function handleInputTimeChange(event: CalendarChangeParams) {
    let name = event.target.name;
    let value = event.target.value;
    console.log(typeof value);
    if (
      (name === "startTime" && value === null) ||
      (name === "endTime" && value === null)
    ) {
      setErrors((prev) => {
        return { ...prev, [name]: true };
      });
    } else if (
      (name === "startTime" && value) ||
      (name === "endTime" && value)
    ) {
      setErrors((prev) => {
        return { ...prev, [name]: false };
      });
    }
    setMeetingDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmitButton(
    event: React.MouseEvent<HTMLButtonElement>,
    updateId: string | null
  ) {
    event.preventDefault();
    if (
      meetingDetails.startTime !== undefined &&
      meetingDetails.endTime !== undefined &&
      updateId === null
    ) {
      let newMeeting = {
        id: uuidv4(),
        title: meetingDetails.title,
        description: meetingDetails.description,
        startTime: meetingDetails.startTime,
        endTime: meetingDetails.endTime,
      };
      setMeetings((prev) => {
        return [...prev, newMeeting];
      });
    } else if (
      meetingDetails.startTime !== undefined &&
      meetingDetails.endTime !== undefined &&
      updateId !== null
    ) {
      let updatedMeeting = {
        title: meetingDetails.title,
        description: meetingDetails.description,
        startTime: meetingDetails.startTime,
        endTime: meetingDetails.endTime,
      };
      setMeetings((prev) => {
        return prev.map((element) => {
          if (element.id === updateId) {
            return { ...element, ...updatedMeeting };
          } else {
            return { ...element };
          }
        });
      });
      setUpdateId(null);
    }
    setMeetingDetails({
      title: "",
      description: "",
      startTime: undefined,
      endTime: undefined,
    });
    setDisplayBasic(false);
  }

  function DeleteMeeting(id: string) {
    let newArray = meetings.filter((element) => {
      return element.id !== id;
    });
    setMeetings(newArray);
  }

  function UpdateMeetings(element: {
    id: string;
    title: string;
    description: string;
    startTime: Date | undefined;
    endTime: Date | undefined;
  }) {
    setMeetingDetails({
      title: element.title,
      description: element.description,
      startTime: element.startTime,
      endTime: element.endTime,
    });
    setDisplayBasic(true);
    setUpdateId(element.id);
  }

  function HideDialog() {
    setDisplayBasic(false);
    setMeetingDetails({
      title: "",
      description: "",
      startTime: undefined,
      endTime: undefined,
    });
    setUpdateId(null);
  }

  let disabled =
    meetingDetails.title === "" ||
    meetingDetails.description === "" ||
    meetingDetails.startTime === null ||
    meetingDetails.startTime === undefined ||
    meetingDetails.endTime === null ||
    meetingDetails.endTime === undefined
      ? true
      : false;
  return (
    <div className="MeetingWrapper">
      <MeetingList
        meetings={meetings}
        DeleteMeetings={DeleteMeeting}
        UpdateMeetings={UpdateMeetings}
      ></MeetingList>
      <Dialog
        visible={displayBasic}
        onHide={HideDialog}
        header="Add a Meeting"
        className="AddMeetingModal"
      >
        <form className="AddMeetingForm" action="">
          <div className="InputBlock">
            <span className="p-float-label">
              <InputText
                className={`AuthenticationInput ${
                  errors.title ? "p-invalid block" : ""
                }`}
                id="title"
                value={meetingDetails.title}
                name="title"
                onChange={handleInputChange}
                autoComplete="title"
              />
              <label htmlFor="title">Title</label>
            </span>
            {errors.title && (
              <small id="username2-help" className="p-error block">
                Title cannot be empty
              </small>
            )}
          </div>
          <div className="InputBlock">
            <span className="p-float-label">
              <InputTextarea
                className={`AuthenticationInput ${
                  errors.description ? "p-invalid block" : ""
                }`}
                id="description"
                value={meetingDetails.description}
                name="description"
                onChange={handleInputChange}
                autoComplete="description"
              />
              <label htmlFor="description">Description</label>
            </span>
            {errors.description && (
              <small id="username2-help" className="p-error block">
                Description cannot be empty
              </small>
            )}
          </div>
          <div className="InputBlock">
            <span className="p-float-label">
              <Calendar
                className={`AuthenticationInput ${
                  errors.startTime ? "p-invalid block" : ""
                }`}
                timeOnly
                showTime
                hourFormat="12"
                id="startTime"
                name="startTime"
                value={meetingDetails.startTime}
                onChange={handleInputTimeChange}
              ></Calendar>
              <label htmlFor="startTime">Start Time</label>
            </span>
            {errors.startTime && (
              <small id="username2-help" className="p-error block">
                Set the start time
              </small>
            )}
          </div>
          <div className="InputBlock">
            <span className="p-float-label">
              <Calendar
                className={`AuthenticationInput ${
                  errors.endTime ? "p-invalid block" : ""
                }`}
                timeOnly
                showTime
                hourFormat="12"
                id="endTime"
                name="endTime"
                value={meetingDetails.endTime}
                onChange={handleInputTimeChange}
              ></Calendar>
              <label htmlFor="endTime">End Time</label>
            </span>
            {errors.endTime && (
              <small id="username2-help" className="p-error block">
                Set the start time
              </small>
            )}
          </div>
          <Button
            onClick={(event) => {
              handleSubmitButton(event, updateId);
            }}
            disabled={disabled}
            label="Add Meeting"
          />
        </form>
      </Dialog>
    </div>
  );
}

export { Meeting };
export type { meetings };
