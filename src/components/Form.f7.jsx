const Form = (props, { $store }) => {
  let username = null;
  let password = null;
  const updateUsername = (e) => {
    username = e.target.value;
  };
  const updatePassword = (e) => {
    password = e.target.value;
  };
  const onClick = () => {
    const params = { username, password };
    $store.dispatch("updateUser", params);
  };
  return () => (
    <div style="width: 80%; margin: 0 auto; margin-top: 10rem">
      <div class="list">
        <div class="item-content item-input item-input-outline">
          <div class="item-inner">
            <div class="item-title item-floating-label">Username</div>
            <div class="item-input-wrap">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={updateUsername}
              />
            </div>
          </div>
        </div>
        <div class="item-content item-input item-input-outline">
          <div class="item-inner">
            <div class="item-title item-floating-label">Password</div>
            <div class="item-input-wrap">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={updatePassword}
              />
            </div>
          </div>
        </div>
      </div>

      <button class="col button button-fill color-blue " onClick={onClick}>
        Click
      </button>
    </div>
  );
};

export default Form;
