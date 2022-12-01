import React from "react";
import "./MeetingList.css";
import { meetings } from "./Meeting";
import EmptyListImage from "../../assets/EmptyListImg.svg";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
function MeetingList({ meetings }: { meetings: meetings }) {
  return (
    <>
      {" "}
      {meetings.length === 0 ? (
        <div className="EmptyListWrapper">
          <img
            className="EmptyListImage"
            src={EmptyListImage}
            alt="No Meetings"
          />
          <h2>Please add a meeting!</h2>
        </div>
      ) : (
        <div className="MeetingList">
          {meetings.map((element) => {
            return (
              <Card key={element.id} title={element.title}>
                <div className="CardBlock">
                  <h3>Description : </h3>
                  <p>{element.description}</p>
                </div>
                <div className="CardBlock">
                  <h3>Scheduled At :</h3>
                  <p>{element.startTime.toLocaleTimeString("en-US")}</p>
                </div>
                <div className="CardBlock">
                  <h3>Ends At :</h3>
                  <p>{element.endTime.toLocaleTimeString("en-US")}</p>
                </div>
                <div className="CardBlock BlockButton">
                  <Button icon="pi pi-pencil" iconPos="left" label="Update" />
                  <Button icon="pi pi-trash" iconPos="left" label="Delete" />
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MeetingList;
