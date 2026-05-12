import image1 from "../assets/image copy 8.png"
const DetailSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center flex-1">
      <div className="max-w-xl xl:max-w-3xl p-5">
        <div>
          <p className="text-4xl font-bold my-5">
            Join Thousands Who Found Success Through <span className="text-blue-600">JobHunt’s</span> Trusted Platform.
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-800">
            Job Hunt Placement is a premier recruitment agency based in
            Siliguri, West Bengal, with over 20 years of experience in providing
            comprehensive manpower solutions. We specialize in connecting
            skilled professionals with leading companies both in India and
            abroad, across a diverse range of industries. Our expertise spans
            sectors such as IT, healthcare, hospitality, retail, engineering,
            BPO, and more, ensuring that we meet the unique staffing needs of
            every client. Our mission is to make the recruitment process
            seamless and efficient for both employers and job seekers. We
            understand that finding the right job or the right candidate can be
            challenging, and that’s where our personalized services come into
            play. Our team of experienced consultants works closely with
            businesses to understand their requirements and with job seekers to
            match them with opportunities that align with their skills and
            aspirations. At Job Hunt Placement, we are committed to fostering
            long-term relationships based on trust, reliability, and
            professionalism. Our extensive network and industry knowledge help
            us deliver high-quality placements that contribute to the growth and
            success of both individuals and organizations. As a trusted partner
            in the recruitment industry, we continue to build on our legacy of
            success, ensuring that our clients and candidates achieve their
            goals. Join us today and experience the Job Hunt Placement
            difference!
          </p>
        </div>
      </div>

      <div className="p-10">
        <div>
            <img src={image1} className="w-full h-auto" />
        </div>
        <div className="flex gap-5 mt-3">
            <div className="bg-blue-600 rounded p-5 text-center gap-1 text-white">
                <p className="text-3xl font-bold">2k+ </p>
                <p className="text-xl font-semibold">Happy Candidates</p>
                <p className="text-xs sm:text-md">Successfully Placed 2,000+ candidates in rewarding career oppotunities</p>
            </div>
            <div className="bg-blue-950 rounded p-5 text-center gap-1 text-white">
                <p className="text-3xl font-bold">1.5+</p>
                <p className="text-xl font-semibold">Complete Placements</p>
                <p className="text-xs sm:text-md">Successfully achieved 1,500 job placements with trusted experties</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
