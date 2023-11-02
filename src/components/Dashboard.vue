<template>
  <div>
    <!-- Hide By status Bar -->
    <div class="hideBar">
      <label class="hideLabel"> Hide: </label>
      <div class="checkbox">
        <!-- All status -->
        <input
          :id="productDataBystatus.status"
          type="checkbox"
          class="styled"
          :value="productDataBystatus.status"
          @change="hideShowALLstatus"
          v-model="allCheck"
        />
        <label :for="productDataBystatus.status">All statuses</label>

        <!-- Dynamic status -->
        <div v-for="status in productDataBystatus.status" :key="`${status}`">
          <input
            :id="`${status}`"
            type="checkbox"
            class="styled"
            :value="status"
            v-model="hidestatus"
          />
          <label :for="`${status}`">
            {{ status }}
          </label>
        </div>
      </div>
    </div>

    <!-- Main Table Design -->
    <Table>
      <TableHeader>
        <TableTr>
          <TableTd :colspan="12">Dashboard SLA</TableTd>
        </TableTr>
        <TableTr>
          <TableTh colspan="3">{{ wwData }}</TableTh>
          <TableTh colspan="8">Product Info</TableTh>
        </TableTr>
        <TableTr>
          <TableTh>Status</TableTh>
          <TableTh>Cores</TableTh>
          <TableTh class="width1">Product</TableTh>
          <TableTh class="width1">Lithography</TableTh>
          <TableTh>Threads</TableTh>
          <TableTh>Base Freq</TableTh>
          <TableTh>Max Turbo Freq</TableTh>
        </TableTr>
      </TableHeader>
      <TableBody>
        <template v-for="(data, status, index) in productDataBystatus.data">
          <!-- status -->
          <TableTr>
            <TableTd class="width1" :rowspan="calstatusRowspan(data)">
              {{ status }}
            </TableTd>
          </TableTr>

          <template v-for="cores in Object.keys(data)">
            <!-- cores -->
            <TableTr>
              <TableTd
                class="width1"
                :rowspan="Object.keys(data[cores]).length + 1"
              >
                {{ cores }}
              </TableTd>
            </TableTr>

            <TableTr v-for="(v, k) in data[cores]">
              <!-- product -->
              <TableTd class="productColumn">{{ v.Product }}</TableTd>

              <!-- Lithography -->
              <TableTd>{{ v.Lithography }}</TableTd>

              <!-- Threads -->
              <TableTd>
                <div class="innerCells">
                  <input :value="v.Threads" :disabled="true" type="text" />
                </div>
              </TableTd>

              <!-- Base Freq -->
              <TableTd>
                <div class="innerCells">
                  <input :value="v.Base_Freq" :disabled="true" type="text" />
                </div>
              </TableTd>

              <!-- Max Turbo Freq -->
              <TableTd>
                <div class="innerCells">
                  <input
                    :value="v.Max_Turbo_Freq"
                    type="text"
                    :disabled="true"
                  />
                </div>
              </TableTd>
            </TableTr>
          </template>
        </template>
      </TableBody>
    </Table>
    <!-- End of Table Design -->
  </div>
</template>

<script>
import { ref, computed } from "vue";
import data from "../assets/data.json";
import Table from "../components/table/Table.vue";
import TableHeader from "../components/table/TableHeader.vue";
import TableBody from "../components/table/TableBody.vue";
import TableFooter from "../components/table/TableFooter.vue";
import TableTr from "../components/table/TableTr.vue";
import TableTd from "../components/table/TableTd.vue";
import TableTh from "../components/table/TableTh.vue";

export default {
  name: "Dashboard",
  components: {
    Table,
    TableTr,
    TableTd,
    TableTh,
    TableHeader,
    TableBody,
    TableFooter,
  },
  setup() {
    const now = new Date();
    let dataRef = data;
    let UIData = data;
    let allCheck = false;
    let wwInfo = {
      year: now.getFullYear(),
      workweek: Math.ceil(
        Math.floor(
          (now - new Date(now.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000)
        ) / 7
      ),
      numofday: now.getDay(),
    };

    /***** Reactive properties*****/
    let perPage = ref(50);
    let currentPage = ref(1);
    let hidestatus = ref([]);
    let allCheckBox = ref([]);

    /***** COMPUTED PROPERTIES *****/
    const wwData = computed(
      () => `${wwInfo.year}WW${wwInfo.workweek}.${wwInfo.numofday}`
    );

    let productDataBystatus = computed(() => {
      let tmp = {};
      let data = UIData;
      let statusSet = new Set();

      data.forEach((element) => {
        let status = element.Status;
        let cores = element.Cores;
        // push status to set
        statusSet.add(status);
        if (hidestatus.value.includes(status)) return; // Hide by status
        if (!tmp[status]) tmp[status] = {};
        if (!tmp[status][cores]) tmp[status][cores] = [];
        tmp[status][cores].push(element);
      });

      // sort status in order
      const strings = new Set(statusSet);
      const sortedStringsArray = [...strings].sort();
      statusSet = new Set(sortedStringsArray);
      return {
        status: [...statusSet],
        data: tmp,
      };
    });

    /***** METHODS *****/
    const setCurrentPage = (page) => (currentPage.value = page);
    const hideShowALLstatus = () => {
      if (!document.querySelector(".styled").checked) {
        hidestatus.value = [];
        allCheckBox.value = [];
      } else {
        hidestatus.value = paginationMeta.value.statuses;
        allCheckBox.value = paginationMeta.value.statuses;
      }
      allCheck = !allCheck.value;
      if (!allCheck) {
        hidestatus.value = [];
        allCheckBox.value = [];
      }
    };
    const calstatusRowspan = (data) => {
      let sum = Object.keys(data).length + 1;
      for (const cores in data) {
        sum += Object.keys(data[cores]).length;
      }
      return sum;
    };

    return {
      hidestatus,
      allCheckBox,
      UIData,
      wwInfo,
      allCheck,
      dataRef,
      perPage,
      wwData,
      hideShowALLstatus,
      productDataBystatus,
      setCurrentPage,
      calstatusRowspan,
    };
  },
};
</script>

<style>
.fas.fa-times {
  display: none;
}

.fas.fa-times.comment {
  display: block;
}

.overWrittenCells:hover .fas {
  display: block;
}

.innerCells {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.innerCells.comment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

table {
  width: 100%;
  white-space: nowrap !important;
}

table td {
  position: relative;
}

i {
  cursor: pointer;
}

.legendColorBox {
  margin: 0.4%;
  float: left;
  height: 20px;
  width: 30px;
  border: 1px solid grey;
  margin-right: 4%;
}

.inputBox {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  border: 0;
  text-transform: uppercase !important;
}

.inputBoxOverWritten {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  border: 0;
  width: 80px;
  text-transform: uppercase !important;
  background: none !important;
}

.overWrittenCells {
  border: 2px solid rgb(194, 1, 1);
}

.overWrittenCells input {
  outline: 0;
}

input::placeholder {
  color: black;
}

input:focus::-webkit-input-placeholder {
  color: grey;
}

input[disabled] {
  cursor: text;
  background-color: inherit;
  color: black;
}

.legend-labels {
  white-space: nowrap !important;
  padding: 0%;
  display: flex;
  list-style-type: none;
  margin-bottom: 5px;
}

.legend-labels li {
  font-size: small;
  margin-right: 2%;
}

select {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  border: 0;
}

table tr td:not(.skip),
table tr th {
  text-align: center;
}

td,
th {
  padding: 2px !important;
  width: 100px;
  border: 1px solid black;
}

.reference {
  width: 1%;
  background-color: #00b0f0;
}

.released {
  width: 1%;
  background-color: #7fff00;
}

.partial {
  width: 1%;
  background-color: #ffa500;
}

.tentative {
  width: 1%;
  background-color: #dcdcdc;
}

.planned {
  width: 1%;
  background-color: #82ffac;
}

.hideBar {
  list-style: none;
  display: flex;
}

.productColumn {
  width: 1%;
  background-color: white;
}

.checkbox {
  list-style: none;
  display: flex;
}

.checkbox label {
  margin-left: 10px;
}

.redActual {
  width: 1%;
  color: red;
  background-color: #dcdcdc;
}

.width1 {
  width: 1%;
  /* white-space: nowrap !important; */
}
</style>
