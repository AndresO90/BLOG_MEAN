export const LOGIN_FAKE = {
  success: true,
  token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTM4MTMwYTliMjM5OTBkZjNlMTY1NTUiLCJ1c2VybmFtZSI6ImJsb2dVc2VyIiwibmFtZSI6IlVzdWFyaW9EZVBydWViYSIsImVtYWlsIjoiYmxvZ1VzZXJAZ21haWwuY29tIiwiaWF0IjoxNTgyMTIzNDM3LCJleHAiOjE1ODI3MjgyMzd9.g9JjDt46W6bCcOdorIN-kfrAiqT5jtTq-2YZkkMjc-E',
  user: {
    createdPosts: [
      '5e39419cbab55d33c75d4762'
    ],
    _id: '5e38130a9b23990df3e16555',
    name: 'UsuarioDePrueba',
    userName: 'blogUser',
    email: 'blogUser@gmail.com',
    password: '$2a$10$gcwXj3veiLPZtWLbLK3ADu7mzTAY/38ttlBZYfXPcqa3Lqec7vu4.',
    date: '2020-02-03T12:33:14.463Z',
    __v: 55
  },
  msg: 'Hurry! You are now logged in.'
};


export const TEMPLATE_FAKE = `
<div class="container">
    <div class="row">
        <div class="card mx-auto">
            <div class="card-header text-white bg-primary">
                <h4>LOGIN</h4>
            </div>
            <div class="card-body">

                <form [formGroup]="form">
                    <div class="form-group">
                        <label for="userName">Username</label>
                        <input formControlName="userName" type="text" placeholder="Username" class="form-control">
                    </div>
                     <div class="form-group">
                        <label for="password">Password</label>
                        <input formControlName="password" type="password" placeholder="Password" class="form-control">
                    </div>
                    <p class="NeedAccount"> <button (click)="onsave()" class="btn btn-primary">Loggin</button>Need an Account??</p>
                </form>
            </div>
        </div>
    </div>
</div>
`;
