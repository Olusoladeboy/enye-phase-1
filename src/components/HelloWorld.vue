<template>
  <div id="main">
    <div class="container">
      <h1>Enye Phase 1 Front End Challenge</h1>
      <button
        v-if="!hideButton"
        class="btn btn-sm btn-primary"
        type="button"
        id="get-joke"
        @click="fetchAPIData"
      >
        See Profiles
      </button>
      <!-- <div v-if = "responseAvailable == 'not-loaded'" class="spinner-grow" role="status"> -->
      <!-- <span class="visually-hidden">Loading...</span> -->
      <!-- </div> -->
      <div
        v-if="responseAvailable == 'not-loaded'"
        class="d-flex align-items-center"
      >
        <strong>Loading...</strong>
        <div
          class="spinner-grow ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
      <div v-if="responseAvailable == 'loaded'">
        <hr />
        <!-- <p> -->
        <!-- <i>{{result}}</i> -->
        <!-- </p> -->
        <div>
          <div class="row">
            <div class="col-md-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                  </svg>
                </span>
                <input
                  v-model="filterByName"
                  type="text"
                  class="form-control"
                  placeholder="Filter by Name"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                    />
                  </svg>
                </span>
                <input
                  v-model="filterByGender"
                  type="text"
                  class="form-control"
                  placeholder="Filter by Gender"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </div>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <!-- <th class="d-sm-none" scope="col">Email</th> -->
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="profile in filteredRows || pageOfItems"
              :key="profile.id"
              data-bs-toggle="modal"
              :data-bs-target="'#' + profile.UserName"
              data-bs-placement="top"
              title="Click to see details"
            >
              <th scope="row">{{ result.indexOf(profile) + 1 }}</th>
              <td>{{ profile.FirstName + " " + profile.LastName }}</td>
              <td>{{ profile.Gender }}</td>
              <!-- <td class="d-sm-none">{{profile.Email}}</td> -->
              <td>
                <button
                  type="button"
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  :data-bs-target="'#' + profile.UserName"
                  data-bs-placement="top"
                  title="Click to see details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                    />
                  </svg>
                </button>
                <!-- {{profile.Email}} -->
                <!-- Modal -->
                <div
                  class="modal fade"
                  :id="profile.UserName"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          @{{ profile.UserName }}'s Profile
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <ul class="list-group">
                          <li class="list-group-item">
                            <strong>First Name:</strong> {{ profile.FirstName }}
                          </li>
                          <li class="list-group-item">
                            <strong>Last Name:</strong> {{ profile.LastName }}
                          </li>
                          <li class="list-group-item">
                            <strong>User Name:</strong> {{ profile.UserName }}
                          </li>
                          <li class="list-group-item">
                            <strong>Gender:</strong> {{ profile.Gender }}
                          </li>
                          <li class="list-group-item">
                            <strong>Latitude:</strong> {{ profile.Latitude }}
                          </li>
                          <li class="list-group-item">
                            <strong>Longitude:</strong> {{ profile.Longitude }}
                          </li>
                          <li class="list-group-item">
                            <strong>Credit Card Number:</strong>
                            {{ profile.CreditCardNumber }}
                          </li>
                          <li class="list-group-item">
                            <strong>Credit Card Type:</strong>
                            {{ profile.CreditCardType }}
                          </li>
                          <li class="list-group-item">
                            <strong>Email:</strong> {{ profile.Email }}
                          </li>
                          <li class="list-group-item">
                            <strong>Domain Name:</strong>
                            {{ profile.DomainName }}
                          </li>
                          <li class="list-group-item">
                            <strong>Phone Number:</strong>
                            {{ profile.PhoneNumber }}
                          </li>
                          <li class="list-group-item">
                            <strong>Mac Address:</strong>
                            {{ profile.MacAddress }}
                          </li>
                          <li class="list-group-item">
                            <strong>URL: </strong
                            ><a
                              :href="profile.URL"
                              target="_blank"
                              rel="noopener noreferrer"
                              >{{ profile.URL }}</a
                            >
                          </li>
                          <li class="list-group-item">
                            <strong>Last Login:</strong> {{ profile.LastLogin }}
                          </li>
                          <li class="list-group-item">
                            <strong>Payment Method:</strong>
                            {{ profile.PaymentMethod }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div class="card-footer pb-0 pt-3">
          <jw-pagination
            :items="result"
            @changePage="onChangePage"
            :pageSize="20"
          ></jw-pagination>
        </div>
      </div>
      <!-- <b-button v-b-modal="'id-modal'">...</b-button>
                  <b-modal id="id-modal" centered title="BootstrapVue">
                    <p class="my-4">Here is the modal</p>
                  </b-modal> -->
    </div>
    <footer
      v-if="responseAvailable == 'loaded'"
      class="bg-light text-center text-lg-start"
    >
      <div class="text-center p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-github"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          /></svg
        ><span></span>
        <a
          class="text-dark"
          target="_blank"
          href="https://github.com/olusoladeboy"
          >Emmanuel Olusola</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterByName: "",
      filterByGender: "",
      result: null,
      // filteredRows: null,
      responseAvailable: null,
      hideButton: false,
      apiKey: null,
      url: "https://api.enye.tech/v1/challenge/records",
      exampleItems: null,
      pageOfItems: [],
    };
  },

  methods: {
    fetchAPIData() {
      this.responseAvailable = "not-loaded";
      this.hideButton = true;

      fetch(this.url, {
        method: "GET",
        // "headers": {
        //     "x-rapidapi-host": "jokes-database.p.rapidapi.com",
        //     "x-rapidapi-key": this.apiKey
        // }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            alert(
              "Server returned " + response.status + " : " + response.statusText
            );
            this.hideButton = false;
          }
        })
        .then((response) => {
          this.result = response.records.profiles;
          console.log(this.result);
          this.responseAvailable = "loaded";
          this.$notify({
            group: "foo",
            title: "Notification",
            text: `${this.result.length} Profiles Retrieved`,
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
  computed: {
    filteredRows() {
      return this.pageOfItems.filter((data) => {
        const firstName = data.FirstName.toString().toLowerCase();
        const lastName = data.LastName.toLowerCase();
        const gender = data.Gender.toLowerCase();
        const searchTermName = this.filterByName.toLowerCase();
        const searchTermGender = this.filterByGender.toLowerCase();
        if (searchTermName) {
          return (
            firstName.includes(searchTermName) ||
            lastName.includes(searchTermName)
          );
        } else if (searchTermGender) {
          return gender.includes(searchTermGender);
        } else {
          return data;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
footer {
  position: relative;
  bottom: 0px;
}
</style>
