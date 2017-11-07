<template>
  <div class="animated fadeIn">
    <div class="debut">
        <div class="row">
          <div class="col-lg-12">
            <b-card header="<i class='fa fa-search'></i> Recherche">
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-prepend input-group">
                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    <input id="prependedInput" class="form-control" size="16" type="text" placeholder="Numéro de projet">
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="button">Recherche</button>
                    </span>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-prepend input-group">
                    <span class="input-group-addon"><i class="fa fa-search"></i></span>
                    <input id="prependedInput" class="form-control" size="16" type="text" placeholder="Numéro de projet">
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="button">Recherche</button>
                    </span>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
        </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <b-card header="<i class='fa fa-align-justify'></i> Liste">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Date registered</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yiorgos Avraamu</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <span class="badge badge-success">Active</span>
                </td>
              </tr>
              <tr>
                <td>Avram Tarasios</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <span class="badge badge-danger">Banned</span>
                </td>
              </tr>
              <tr>
                <td>Quintin Ed</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <span class="badge badge-secondary">Inactive</span>
                </td>
              </tr>
              <tr>
                <td>Enéas Kwadwo</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <span class="badge badge-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Agapetus Tadeáš</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <span class="badge badge-success">Active</span>
                </td>
              </tr>
            </tbody>
          </table>
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Prev</a></li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'recherche',
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>
