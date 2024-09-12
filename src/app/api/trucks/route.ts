export async function GET() {
  try {
    const response = await fetch(
      "https://data.sfgov.org/api/views/rqzj-sfat/rows.csv"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return new Response(await response.text(), { status: 200 });
  } catch (error) {
    console.error("# # # # # ", error);
  }
}
