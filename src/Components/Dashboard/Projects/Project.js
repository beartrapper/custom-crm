import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Board from "react-trello";
import TopNav from "../Nav/TopNav";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

//CLOSE ICON FOR MODAL
const closeIcon = (
  <svg fill="currentColor" viewBox="0 0 20 20" width={0} height={0}>
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function Project() {
  const [open, setOpen] = useState(false);

  const data = {
    lanes: [
      {
        id: "lane11",
        title: "Planned Tasks",
        cardStyle: { borderRadius: "5px" }, // Style of Card
        style: { borderRadius: "15px" },
        cards: [
          {
            id: "Card1",
            title: "Write Blog",
            description: "Can AI make memes",
            label: "30 mins",
            draggable: false,
          },
          {
            id: "Card2",
            title: "Pay Rent",
            description: "Transfer via NEFT",
            label: "5 mins",
            metadata: { sha: "be312a1" },
          },
        ],
      },
      {
        id: "lane2",
        title: "Completed",
        cardStyle: { borderRadius: "5px" }, // Style of Card
        style: { borderRadius: "15px" },
        // label: '0/0',
        cards: [],
      },
    ],
  };

  return (
    <div class="">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={closeIcon}
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
      >
        <div class="col-lg-12 rounded">
          <div class="row pt-3 pl-2">
            <div class="col-lg-8">
              <h4 class="text-center text-grey">Dummy heading</h4>
              <hr />
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-lg-8">
              <form>
                <div class="form-group row">
                  <div class="col-lg-12">
                    <textarea
                      type="text"
                      class="form-control bg-grey"
                      id="exampleInputPassword2"
                      value="The description that was shown"
                      cols="100"
                      rows="6"

                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="offset-1"></div>
            <div class=" col-lg-3">
              <div class="row">
                <button class="btn btn-primary col-lg-12 ">Assign to</button>
              </div>
              <div class="row">
                <button class="btn btn-primary col-lg-12 mt-2">
                  Assign to
                </button>
              </div>
              <div class="row">
                <button class="btn btn-primary col-lg-12 mt-2">
                  Assign to
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <TopNav searchBarVisibility={false} />

      <div class=" page-body-wrapper">
        <Nav />
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row ">
              <div class="col-12" style={{ zIndex: "999" }}>
                <Board
                  data={data}
                  style={{ backgroundColor: "white", borderRadius: "15px" }} // Style of BoardWrapper
                  editable={true}
                  editLaneTitle={true}
                  canAddLanes={true}
                  //   collapsibleLanes={true}
                  onCardClick={() => {
                    setOpen(true);
                  }}
                  className="board-container shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
