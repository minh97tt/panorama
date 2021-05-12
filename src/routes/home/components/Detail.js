import { Component } from "preact";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <h2>Modal</h2>

        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#detailModal"
        >
          Open modal
        </button>
        <div class="modal fade" id="detailModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">{this.props.title}</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body container">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <img
                      class="detailImage"
                      src={this.props.imageSrc}
                      alt="random"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <p>{this.props.description}</p>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;