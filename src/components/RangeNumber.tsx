interface Props {
  searchRange: number;
}

const RangeNumber = ({ searchRange }: Props) => {
  return (
    <div className="flex align-center justify-center font-bold">
      <p>
        {searchRange * 9 + 1} - {searchRange * 9 + 9}
      </p>
    </div>
  );
};

export default RangeNumber;
