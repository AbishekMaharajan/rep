import Form from "../components/Form.f7";
import Navbar from "../components/Navbar.f7";

const LoginPage = (
  props,
  { $onBeforeMount, $onMounted, $onBeforeUnmount, $onUnmounted, $store }
) => {
  // Lifecycle
  $onBeforeMount(() => {
    console.log("onBeforeMount");
    const data = $store.state.user;
    console.log("data: ", data);
  });
  $onMounted(() => {
    console.log("onMounted");
    const params = { username: "Abi", password: "1234" };
    $store.dispatch("updateUser", params);
    const updatedState = $store.state.user;
    console.log("updatedState: ", updatedState);
  });
  $onBeforeUnmount(() => {
    console.log("onBeforeUnmount");
  });
  $onUnmounted(() => {
    console.log("onUnmounted");
  });

  const name = "Home";
  return () => (
    <div class="page">
      <Navbar name={name} />
      <Form />
    </div>
  );
};
export default LoginPage;
