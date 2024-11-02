import React from "react";

type Props = {};

function ShowCase({}: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {/* First Row: 3 Equal Cells */}
      <div className="flex items-center justify-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Cell 1</CardTitle>
          </CardHeader>
          <CardContent>{/* content  */}</CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Cell 2</CardTitle>
          </CardHeader>
          <CardContent>{/* Your content here */}</CardContent>
        </Card>
      </div>
      <div className="flex items-center justify-center">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Cell 3</CardTitle>
          </CardHeader>
          <CardContent>{/* Your content here */}</CardContent>
        </Card>
      </div>

      {/* Second Row: One Big Cell */}
      <div className="flex items-center justify-center md:col-span-3">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Big Cell</CardTitle>
          </CardHeader>
          <CardContent>
            <ShowCaseChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ShowCase;
