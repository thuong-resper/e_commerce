import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  base: { padding: "0 8px" },
  root: {
    width: "100%",
  },
  wrapper: {
    borderRadius: 4,
    margin: "16px 0 0 16px",
    padding: "16px",
    backgroundColor: "#fff !important",
  },
  paper: {
    width: "100%",
    boxShadow: "none",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  orderDetail: {
    borderRadius: 4,
    // marginTop: theme.spacing(3.5),
  },
  location: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eff0f5",
    paddingBottom: "1rem",
  },
  locationLabel: { color: "var(--whiteThin)" },
  locationIcon: { color: "var(--whiteThin)", marginRight: "10px" },
  summary_section: { padding: "16px 0" },
  summary_section_heading: {
    fontSize: "18px",
    color: "#212121",
    marginBottom: "14px",
    position: "relative",
    fontWeight: 400,
  },
  summary_section_content: {
    paddingBottom: 16,
  },
  checkout_row: {
    display: "flex",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  checkout_summary_label: {
    fontSize: 14,
    color: "var(--whiteThin)",
  },
  checkout_summary_value: {
    fontSize: 16,
    textAlign: "right",
    color: "#202020",
    letterSpacing: "-.44px",
    verticalAlign: "middle",
  },
  voucher_input: {
    marginBottom: 8,
    width: "100%",
  },

  voucher_input_inner: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
    width: "100%",
  },
  voucher_input_col_9: {
    width: "73%",
  },
  voucher_input_type: { width: "100%" },
  voucher_input_button: {
    height: "100%",
    margin: 0,
    width: "100%",
  },
  confirm_cart_button: {
    height: "2.5rem",
    margin: 0,
    width: "100%",
  },
  voucher_input_col_3: {
    width: "25%",
  },
  checkout_order_row: {
    display: "table",
    width: "100%",
    marginBottom: "16px",
  },
  checkout_order_total_title: {
    display: "table-cell",
    fontSize: "14px",
    color: "#202020",
    lineHeight: "16px",
  },
  checkout_order_total_fee: {
    display: "table-cell",
    fontSize: "18px",
    color: "var(--secondary)",
    textAlign: "right",
  },
  checkout_order_total_fee_tip: {
    fontSize: "12px",
    color: "#424242",
    letterSpacing: "0",
    lineHeight: "16px",
    display: "block",
    textAlign: "right",
    marginTop: "5px",
  },
}));
