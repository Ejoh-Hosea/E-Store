import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bt-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* search */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
      ></FormInput>
      {/* categories */}
      <FormSelect
        label="select category"
        name="company"
        list={meta.categories}
        size="select-sm"
      ></FormSelect>
      {/* companies */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      ></FormSelect>

      {/* order */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
      ></FormSelect>
      {/* price */}
      <FormRange name="price" label="select price" size="range-sm" />
      {/* buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
